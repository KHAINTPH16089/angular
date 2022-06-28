import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/types/Category';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;
  categories: Category[];
  reviewSource: string;
  uploadFile: any;
  public_id: any;
  file: any;
  constructor(
    private productService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private CategoryService:CategoryService,
    private ToastrService: ToastrService
    ) { 
    this.productForm = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(6)]),
      price: new FormControl(0, [Validators.required]),
      desc: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      public_id: new FormControl('')
    })
    this.productId = '';
    this.categories = [];
    this.reviewSource = 'https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg';
    this.uploadFile = ''
  }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['_id'];
    if(this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          category: data.category,
          desc: data.desc,
          image: data.image,
          public_id: data.public_id
        })
        this.reviewSource = data.image
      })
    }
    this.onGetcategory();
  }
redirectToList(){
    this.router.navigateByUrl('/admin/products');
  }
  
  
  
  handleImage(e: any) {
    this.file = e.target.files[0]
    this.reviewFile(this.file)
    
  }
  reviewFile(file:any){
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        this.reviewSource = reader.result as string
    }
  }

  onSubmit() {  
    console.log(1);
      
    const data = this.productForm.value;
    if(this.productId !== '' && this.productId !== undefined){
      const update = async () => {
        if(this.file){
          const {url, public_id} = await (await ( this.productService.uploadFileProduct(this.reviewSource))).json();
          this.productService.removeFile(data.public_id).subscribe(b=>{})
          this.uploadFile = url;
          this.public_id = public_id;
          data.image = this.uploadFile;
          data.public_id = this.public_id;
        }
        
        return this.productService.updateProduct(data, this.productId).subscribe(data => {
          this.ToastrService.success("bạn đã sửa sản phẩm thành công");
          this.redirectToList();
        })
      }
      update()
    }
    const upload = async () => {
      const {url, public_id} = await (await ( this.productService.uploadFileProduct(this.reviewSource))).json();
      this.uploadFile = url
      this.public_id = public_id;
      data.image = this.uploadFile;
      data.public_id = this.public_id;
      return this.productService.createProduct(data).subscribe(data => {
        this.ToastrService.success("bạn đã thêm sản phẩm thành công");
        this.redirectToList();
      });
    }
    if(this.productId == '' || this.productId == undefined){
      return upload();
    }
    
    return;
  }
  onGetcategory() {
    this.CategoryService.getCategories().subscribe((data)=> {
      this.categories = data;
    })
  }
}
