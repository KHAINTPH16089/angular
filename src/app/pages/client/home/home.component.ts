import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/types/Category';
import { Product } from 'src/app/types/Products';
import { ProductService } from '../../../services/product.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value: any;
  products: Product[];
  categories: Category[];
  constructor(
    private ProductService:ProductService,
    private CategoryService:CategoryService,
  ) { 
    this.products = [];
    this.categories = [];
  }

  ngOnInit(): void {
    this.onGetList();
    this.onGetcategory();
    
  }

  onGetList() {
    this.ProductService.getProducts(null, 1,8,null, 1).subscribe((data)=> {
      this.products = data.filter(item => item.status == 1)
    })
    
  }
  onGetcategory() {
    this.CategoryService.getCategories().subscribe((data)=> {
      this.categories = data;
    })
  }
}
