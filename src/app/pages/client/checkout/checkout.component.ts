import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckOutService } from 'src/app/services/check-out.service';
import { orderDetail } from 'src/app/types/checkOut';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkOutForm: FormGroup
  carts: orderDetail[];
  total: any;
  constructor(
    private checkoutService: CheckOutService,
    private toastr: ToastrService,
    private router: Router
  ) { 
    this.carts = [];
    this.checkOutForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('',Validators.required),
      node: new FormControl(''),
      total: new FormControl(0)
    })
  }

  ngOnInit(): void {
    if(!localStorage.getItem('user')){
      this.toastr.warning("Bạn chưa đăng nhập")
      this.router.navigateByUrl('/signin')
    }
    this.carts = JSON.parse(localStorage.getItem('cart') || '[]')
    this.onTotal();
  }

  onTotal(){
    this.total = 0;
    this.carts.forEach(item => {
      this.total += item.value * item.price
    })
  }

  onSubmit(){
    const data = this.checkOutForm.value
    data.total = this.total;
    return this.checkoutService.createOrder(data).subscribe((item) => {
      this.carts.forEach((e)=>{
        e.order = item._id;
        e.quantity = e.value
        this.checkoutService.createOrderDetail(e).subscribe((a)=>{})
      })
      localStorage.removeItem('cart');
      this.toastr.success("bạn đã đặt hàng thành công");
      this.router.navigateByUrl('/')
    })

    
  }
}
