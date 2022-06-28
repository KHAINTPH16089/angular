import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { CheckOutService } from 'src/app/services/check-out.service';
import { status } from 'src/app/types/Category';
import { order } from 'src/app/types/checkOut';

@Component({
  selector: 'app-admin-order-list',
  templateUrl: './admin-order-list.component.html',
  styleUrls: ['./admin-order-list.component.css']
})
export class AdminOrderListComponent implements OnInit {
  orders: order[];
  status: status[];
  constructor(
    private checkoutService:CheckOutService,
    private statusService:CategoryService,
  ) { 
    this.orders = [];
    this.status = [];
  }

  ngOnInit(): void {
    this.statusService.getStatus().subscribe((data) => { 
      this.status = data
    })
    this.onGetList()
  }

  onGetList() {
    this.checkoutService.getAllOrder().subscribe((data)=> {
      this.orders = data;
    })
  }

  onDelete(_id: string) {
    const confirmDelete = confirm("bạn có chắc muốn xóa");
    if(confirmDelete && _id){
      this.checkoutService.removeDetail(_id).subscribe((data)=> {
        this.onGetList();
      })
    }
    
  }

  statusUpdate(productId: string, event: any) {
    const newStatus = event.target.value
    this.checkoutService.updateOrder(productId, {
      status: newStatus
    }).subscribe(data => {
      this.onGetList();
    });
  }
}
