import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { user } from 'src/app/types/auth';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users: user[];
  constructor(
    private authService:AuthService,
    private toastr:ToastrService
  ) { 
    this.users = [];
  }

  ngOnInit(): void {
    this.onGetList()
  }

  onGetList() {
    this.authService.getUsers().subscribe((data)=> {
      this.users = data;
    })
  }

  onDelete(_id: string) {
    const confirmDelete = confirm("bạn có chắc muốn xóa");
    if(confirmDelete && _id){
      this.authService.removeUsers(_id).subscribe((data)=> {
        this.toastr.success("bạn đã xóa user thành công");
        this.onGetList();
      })
    }
    
  }

  onUpdateStatus(productId: string, newStatus: number) {
    this.authService.updateUsers(productId, {
      status: newStatus
    }).subscribe(data => {
      this.toastr.success("bạn đã sửa trạng thái user thành công");
      this.onGetList();
    });
  }
}
