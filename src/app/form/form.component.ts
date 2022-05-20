import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() {
   
  }

  ngOnInit(): void {
  }
  
  users = [
    {
      id: 1,
      name: 'khaintph16089',
      age: 20,
      email: 'khaintph16089@fpt.edu.vn',
      phone: '0354754628',
      avatar: 'https://th.bing.com/th/id/OIP.j_EBebkQmHd2ZeLdM2dUPgHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
    },
    {
      id: 2,
      name: 'khaint',
      age: 20,
      email: 'khaint@fpt.edu.vn',
      phone: '0354754628',
      avatar: 'https://th.bing.com/th/id/OIP.j_EBebkQmHd2ZeLdM2dUPgHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
    }
  ]

  inputValue = {
    id: 0,
    name: '',
    age: 0,
    email:'',
    phone:'',
    avatar:''
  }

  onSubmit(userForm: NgForm ){
    const userIds = this.users.map(user => user.id).sort((a, b) => a-b);
    const newId = userIds[userIds.length - 1];

    if(this.inputValue.id == 0){
      this.users.push({
        ...userForm.value,
        id: newId + 1
      })
    } else{
      const idx = this.users.findIndex(item => item.id === this.inputValue.id)
      if(idx > -1){
        this.users[idx] = {
          ...userForm.value,
          id: this.inputValue.id
        }
      }
    }
    
    userForm.resetForm({
      name: '',
      age: 0,
      email:'',
      phone: '',
      avatar: ''
    })
  }
  remove(id: number){
    this.users = this.users.filter( item => item.id !== id )
  }
  edit(id: number){
    const editUser =  this.users.find(item => item.id === id)
    console.log(editUser);
    
    if(editUser){
      this.inputValue = {...editUser}
    }
  }

}
