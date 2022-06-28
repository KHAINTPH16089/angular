import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
  user: any
  constructor(
    private router:Router,
    private auth:AuthService
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.user = JSON.parse(localStorage.getItem('user') || '[]')
    }
  }

  onRemoveUser(){
    this.auth.logOut();
    this.router.navigateByUrl('/user/signin');
  }

}
