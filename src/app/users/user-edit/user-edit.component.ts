import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @Input()
  currentUser:UserModel;

  @Output()
  saveUser:EventEmitter<any>;

  constructor() { 
    this.saveUser = new EventEmitter<any>()
  }

  ngOnInit(): void {
  }

  saveUserData(email:string, name:string){
  //  this.currentUser.email=email;
  //  this.currentUser.username=name;
   this.saveUser.emit({email : email , name : name })
  }

}
