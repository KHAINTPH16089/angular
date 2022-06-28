import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { 
    this.userForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.router.navigateByUrl('/')
    }
  }

  onSubmit() {
    // 1. Nhận dữ liệu từ form và call API login
    this.authService.signin(this.userForm.value).subscribe(data => {
      // 2. Lưu thông tin user vào localStorage: setItem(tên key lưu vào ls, dữ liệu string)
      
      localStorage.setItem('user', JSON.stringify(data));
      // localStorage.getItem('loggedInUser');
      // 3. di chuyển về màn admin/products
      this.toastr.success("đã đăng nhập thành công");
      this.router.navigateByUrl('/');
      console.log(data.user.role);
    });
  }

}
