//必要的模块
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//自定义组件
import { LoginComponent } from './login/login.component';


//自定义路由
import {loginRoutes} from './login.route'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes)
  ],
  declarations: [LoginComponent],
  exports:[LoginComponent]
})
export class LoginModule { }

