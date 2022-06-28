import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from '../../../services/product.service';
import { Category } from 'src/app/types/Category';
import { Count, Product } from 'src/app/types/Products';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  categories: Category[];
  products: Product[];
  search: string|null;
  limit: number;
  sort: string|null;
  price: number;
  page: number;
  count: number;
  constructor(
    private CategoryService: CategoryService,
    private ProductService: ProductService,
  ) { 
    this.categories = [];
    this.products = [];
    this.search = null;
    this.limit = 6;
    this.sort = null;
    this.price = 1;
    this.page = 1;
    this.count = 0
  }

  ngOnInit(): void {
    this.onGetcategory();
    this.onGetList();
    this.ProductService.getCount().subscribe(data => {
      this.count = data
    })
  }

  onGetList() {
    this.ProductService.getProducts(this.search, this.price, this.limit, this.sort, this.page).subscribe((data)=> {
      this.products = data.filter(item => item.status == 1)
    })

  }

  onGetcategory() {
    this.CategoryService.getCategories().subscribe((data)=> {
      this.categories = data.filter(item => item.status == 1)
    })
  }

  onProductCate(_id : string | undefined){
    this.CategoryService.getCategory(_id, null).subscribe((data)=>{
      this.products = data.filter(item => item.status == 1)
    })
  }
  //sắp xếp
  sortBy(event: any){
    this.sort = event.target.value;
    this.onGetList();
  }
  //tìm kiếm
  onSearch(event: any){
    this.search = event.target.value;
  }
  onSearch1(){
    this.onGetList();
  }
  //phân trang
  trangDau(){
    if(this.page != 1){
      this.page -= 1;
      this.onGetList()
    }
  }
  trangCuoi(){
    const so = Math.ceil(this.count / this.limit)
    if(this.page < so){
      this.page += 1;
      this.onGetList()
    }
  }
}
