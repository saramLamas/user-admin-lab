import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel.model';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  currentUser:UserModel;
  arrayUser: Array<UserModel>;

  constructor() { }
  
  

  ngOnInit(): void {
    console.log("The User Container Init!!!")
    this.currentUser= new UserModel();
    this.arrayUser= new Array<UserModel>();

  }
  saveUserData(emailValue:string,nameValue:string){
    //this.currentUser.email=emailValue;
    //this.currentUser.username=nameValue;
  }

  onUserSelected(user:UserModel){
    this.currentUser=user;

  }

}
