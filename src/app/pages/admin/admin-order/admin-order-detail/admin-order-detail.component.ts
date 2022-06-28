import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckOutService } from 'src/app/services/check-out.service';
import { orderDetail } from 'src/app/types/checkOut';

@Component({
  selector: 'app-admin-order-detail',
  templateUrl: './admin-order-detail.component.html',
  styleUrls: ['./admin-order-detail.component.css']
})
export class AdminOrderDetailComponent implements OnInit {
  orders: orderDetail[];
  constructor(
    private checkoutService:CheckOutService,
    private activateRoute: ActivatedRoute
  ) { 
    this.orders = [];
  }

  ngOnInit(): void {
    this.onGetList()
  }

  onGetList() {
    const idFromUrl = this.activateRoute.snapshot.params['_id'];
    this.checkoutService.getOrderDetail(idFromUrl).subscribe((data)=> {
      this.orders = data;
    })
  }

}
