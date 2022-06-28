import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductCart } from '../types/Products';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  private serviceSubject = new Subject<string>();

  watchService(): Observable<any> {
    return this.serviceSubject.asObservable();
  }

  getItem() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  setItem(addItem: ProductCart){
    const cartItems = this.getItem();
    const existItem = cartItems.find((item: ProductCart) => item._id === addItem._id);
    if(!existItem) {
      cartItems.push(addItem);
    }else{
      cartItems.value += addItem.value;
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));

    this.serviceSubject.next('');
  }
}
