//必要的模块
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//自定义组件
import { AdminComponent } from './admin/admin.component';


//自定义路由
import {adminRoutes} from './admin.route'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
  ],
  declarations: [AdminComponent],
  exports:[AdminComponent]
})
export class AdminModule { }
