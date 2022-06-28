import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/types/Category';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {
  categories: Category[];
  constructor(
    private CategoryService:CategoryService,
    private ProductService:ProductService,
    private toastr:ToastrService
  ) { 
    this.categories = [];
  }

  ngOnInit(): void {
    this.onGetList()
  }

  onGetList() {
    this.CategoryService.getCategories().subscribe((data)=> {
      this.categories = data;
    })
  }

  onDelete(_id: string | undefined) {
    const confirmDelete = confirm("bạn có chắc muốn xóa");
    if(confirmDelete && _id){
      this.CategoryService.getCategory(_id, null).subscribe((data)=> {
        data.forEach((item)=>{
          this.ProductService.updateProduct( {
            status: 0
          }, item._id).subscribe(data => {});
        })
        this.CategoryService.removeCategory(_id).subscribe((data)=> {
          this.toastr.success("bạn đã xóa danh mục thành công");
          this.onGetList();
        })
      })
      
    }
    
  }

  onUpdateStatus(categoryId: string | undefined, newStatus: number) {
    this.CategoryService.updateCategory(categoryId ,{
      status: newStatus
    }).subscribe(data => {
      if(newStatus == 0){
        this.CategoryService.getCategory(data._id, null).subscribe((data)=> {
          console.log(data);
          
          data.forEach((item)=>{
            this.ProductService.updateProduct( {
              status: 0
            }, item._id).subscribe(data => {});
          })
        })
      }
      if(newStatus == 1){
        this.CategoryService.getCategory(data._id, null).subscribe((data)=> {
          data.forEach((item)=>{
            this.ProductService.updateProduct( {
              status: 1
            }, item._id).subscribe(data => {});
          })
        })
      }
      
      this.toastr.success("bạn đã chuyển trạng thái danh mục thành công");
      this.onGetList();
    });
  }
}
