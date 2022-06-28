import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { ProductCart } from 'src/app/types/Products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: ProductCart[];
  total: any;
  constructor() { 
    this.cart = [];
  }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]')
    this.onTotal();
  }

  tang(_id: any){
    this.cart.forEach(item => {
      if(item._id === _id){
        item.value += 1;
        this.total += item.price;
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    })
  }

  giam(_id: any){
    this.cart.forEach(item => {
      if(item._id === _id){
        item.value -= 1;
        this.total -= item.price;
        if(item.value == 0){
          item.value = 1;
          this.total += item.price;
        }
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    })
  }

  remove(_id:any){
    const remove = this.cart.filter(item => item._id != _id);
    localStorage.setItem('cart', JSON.stringify(remove));
    this.cart = remove;
    this.onTotal();
  }

  onTotal(){
    this.total = 0;
    this.cart.forEach(item => {
      this.total += item.value * item.price
    })
  }
}
