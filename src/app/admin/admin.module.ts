//必要的模块
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule}from '@angular/forms'

//导入插件
import { TypeaheadModule } from 'ngx-bootstrap';
//import { CollapseModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { ModalModule  as myModalModule} from 'ngx-bootstrap' ;
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
//自定义路由
import {adminRoutes} from './admin.route';


//自定义组件
import { AdminComponent } from './admin/admin.component';
import { ClassComponent } from './admin/studentclass/class.component';
import { SubjectComponent } from './admin/subject/subject.component';
import { StudentComponent } from './admin/student/student.component';
import { MarkComponent } from './admin/mark/mark.component';
import { MyadminComponent } from './admin/myadmin/myadmin.component';
import { TeacherComponent } from './admin/teacher/teacher.component';
import { NewsComponent } from './admin/news/news.component';
import { AllchangeComponent } from './admin/allchange/allchange.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule,
    TypeaheadModule.forRoot(),
    TabsModule.forRoot(),
    myModalModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  declarations: [AdminComponent, ClassComponent, SubjectComponent, StudentComponent, MarkComponent, MyadminComponent, TeacherComponent, NewsComponent, AllchangeComponent],
  exports:[AdminComponent]
})
export class AdminModule { }
