import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel.model';
import { USERS } from 'src/app/mocks/users.mock';

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
    this.arrayUser=USERS;
  

  }
  saveUserData(dataObj:any){
    this.currentUser.email=dataObj.email;
    this.currentUser.username=dataObj.name;
  }

  onUserSelected(user:UserModel){
    this.currentUser=user;

  }

}
