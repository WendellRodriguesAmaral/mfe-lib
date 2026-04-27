import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './login/login';



@NgModule({
  exports: [Login],
  declarations: [Login],
  imports: [
    CommonModule
  ],
})
export class AuthModule { }
