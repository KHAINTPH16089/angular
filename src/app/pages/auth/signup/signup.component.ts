import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { 
    this.userForm = new FormGroup({
      userName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.authService.signup(this.userForm.value).subscribe(data=>{
      this.toastr.success("bạn đã đăng kí thành công");
      this.router.navigateByUrl('/')
    })
  }
}
