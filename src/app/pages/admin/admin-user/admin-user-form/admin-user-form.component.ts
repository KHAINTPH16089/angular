import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-user-form',
  templateUrl: './admin-user-form.component.html',
  styleUrls: ['./admin-user-form.component.css']
})
export class AdminUserFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private userService:AuthService,
    private toastr: ToastrService
    ) { 
    this.userForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  ngOnInit(): void {
  }

  
  

  onSubmit() {
    this.userService.signup(this.userForm.value).subscribe(data=>{
      this.toastr.success("bạn đã thêm user thành công");
      this.router.navigateByUrl("/user")
    })
  }
}
