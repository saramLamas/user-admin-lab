import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel.model';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  currentUser:UserModel;

  constructor() { }
  
  

  ngOnInit(): void {
    console.log("The User Container Init!!!")
    this.currentUser= new UserModel();

  }
  saveUserData(emailValue:string,nameValue:string){
    this.currentUser.email=emailValue;
    this.currentUser.username=nameValue;
  }

}
