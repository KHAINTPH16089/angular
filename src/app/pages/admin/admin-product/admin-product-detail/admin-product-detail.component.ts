import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Products';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private producService: ProductService,
    private activateRoute: ActivatedRoute
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
  }

  ngOnInit(): void {
    const idFromUrl = this.activateRoute.snapshot.params['_id'];

    this.producService.getProduct(idFromUrl).subscribe(data => {
      this.product = data
    })
  }

}
