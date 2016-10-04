import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserComponent } from '../user/user.component';
import { AddUserComponent } from '../user/add-user/add-user.component';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import userRoutes from './user.routes.ts';

@NgModule({
  declarations: [
    UserComponent,
    AddUserComponent
  ],
  imports: [
	CommonModule,
    PaginationModule,
    userRoutes
  ],
  exports:[
  	UserComponent
  ],
  providers: []
})
export default class UserModule { }