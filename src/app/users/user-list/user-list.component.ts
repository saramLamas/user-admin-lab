import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input()
  innerUsers:UserModel[];

  @Input()
  currentUser:UserModel;


  @Output()
  userSelected:EventEmitter<UserModel>;

  constructor() { 
    this.userSelected=new EventEmitter<UserModel>();
  }

  ngOnInit(): void {
  }

  onUserSelected(user:UserModel){
    this.userSelected.emit(user);
  }

}
