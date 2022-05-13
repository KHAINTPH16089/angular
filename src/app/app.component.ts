import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  SVs = [
    {
      id: 1,
      name:"giảng viên 1",
      age: 31,
      gender: 0,
      avatar: "https://th.bing.com/th/id/OIP.j_EBebkQmHd2ZeLdM2dUPgHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      status: 0
    },
    {
      id: 2,
      name:"giảng viên 2",
      age: 24,
      gender: 0,
      avatar: "https://th.bing.com/th/id/OIP.j_EBebkQmHd2ZeLdM2dUPgHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      status: 1
    },
    {
      id: 3,
      name:"giảng viên 3",
      age: 26,
      gender: 1,
      avatar: "https://th.bing.com/th/id/OIP.j_EBebkQmHd2ZeLdM2dUPgHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      status: 1
    },
    {
      id: 4,
      name:"giảng viên 4",
      age: 27,
      gender: 1,
      avatar: "https://th.bing.com/th/id/OIP.j_EBebkQmHd2ZeLdM2dUPgHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      status: 1
    },
  ]
}
