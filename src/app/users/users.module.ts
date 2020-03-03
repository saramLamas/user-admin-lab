import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations:  [
    UserContainerComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserContainerComponent
  ]
})
export class UsersModule { }
