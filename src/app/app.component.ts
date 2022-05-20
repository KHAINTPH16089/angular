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
  poly = "";
  clickPoly(){
    this.poly = "poly"
  }
  showStatus = true;
  button(){
    if(this.showStatus == true){
      this.showStatus = false
    } else {
      this.showStatus = true
    }
  }

  inputValue = "";
  input(e: any){
    this.inputValue = e.target.value
  }

  inputValues = {
    name: '',
    age: '',
    gender: '0',
    avatar: '',
    status: '1'
  };
  

  // onInputName(e: any, key: string){
  //   this.inputValues.name = e.target.value;
  // }
  // onInputAge(e: any, info: string){
  //   this.inputValues.age = e.target.value;
  // }
  onInput(e: any, key: 'name'|'age'|'avatar'|'gender'|"status"){
    this.inputValues[key] = e.target.value;
  }
  onSubmit(){
    this.SVs.push(
      {
        ...this.inputValues,
        age: +this.inputValues.age,
        gender: +this.inputValues.gender,
        status: +this.inputValues.status,
        id: this.SVs.length + 1
      }
    )
    this.inputValues = {
      name: '',
      age: '',
      gender: '0',
      avatar: '',
      status: '1'
    };
  }
  
}
