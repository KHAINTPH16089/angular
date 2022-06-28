import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { CategoryProduct } from 'src/app/types/Category';
import { Product } from '../../../types/Products';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  productCategory: CategoryProduct[];
  cartItemValue: number = 1;
  constructor(
    private producService: ProductService,
    private CategoryService: CategoryService,
    private activateRoute: ActivatedRoute,
    private lsService: LocalStorageService,
    private toastr: ToastrService,
    private router: Router
  ) { 
    this.product = {
      _id: '',
      name: '',
      price: 0,
      category: '',
      image: '',
      desc: '',
      status: 0,
      public_id: ''
    }
    this.productCategory = []
  }
  
  ngOnInit(): void {
    const idFromUrl = this.activateRoute.snapshot.params['_id'];
    this.producService.getProduct(idFromUrl).subscribe(data => {
      if(data.status == 0){
        this.toastr.warning("không có sản phẩm này ")
        this.router.navigateByUrl("/")
      }
      this.product = data
      this.CategoryService.getCategory(this.product.category, 4).subscribe(e => {
        this.productCategory = e.filter(item => item._id !== data._id)
      })
    })

    
    
  }
  onInputValueChange(event: any){
    this.cartItemValue = event.target.value;
  }

  onAddToCart(){
    const addItem = {
      _id: this.product._id,
      name: this.product.name,
      price: this.product.price,
      value: +this.cartItemValue,
      image: this.product.image,
      desc: this.product.desc
    }

    this.lsService.setItem(addItem);
    this.toastr.success('bạn đã thêm vào giỏ hàng thành công')
  }
}
