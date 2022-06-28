import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/types/Category';
import { Product } from 'src/app/types/Products';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];
  category: Category[];
  constructor(
    private ProductService:ProductService,
    private CategoryService:CategoryService,
    private toastr: ToastrService
  ) { 
    this.products = [];
    this.category = [];
  }

  ngOnInit(): void {
    this.onGetList()
  }

  onGetList() {
    this.ProductService.getProducts(null, 1,100,null,1).subscribe((data)=> {
      this.products = data;
    })
    this.CategoryService.getCategories().subscribe((data) => {
      this.category = data;
    })
  }

  onDelete(_id: string) {
    const confirmDelete = confirm("bạn có chắc muốn xóa");
    if(confirmDelete && _id){
      this.ProductService.getProduct(_id).subscribe(data=>{
        this.ProductService.removeFile(data.public_id).subscribe(data=>{
          
        })
        this.ProductService.removeProduct(_id).subscribe((data)=> {
          this.toastr.success("bạn đã xóa thành công");
          this.onGetList();
        })
      })
      
    }
    
  }

  onUpdateStatus(productId: string, newStatus: number) {
    this.ProductService.updateProduct( {
      status: newStatus
    },productId).subscribe(data => {
      this.toastr.success("bạn đã sửa trạng thái sách thành công");
      this.onGetList();
    });
  }

}
