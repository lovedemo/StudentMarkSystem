/**
 * Created by YZ on 2017/5/31.
 */
import {RouterModule} from "@angular/router";
import {AdminComponent} from './admin/admin.component'
import {ClassComponent}from './admin/studentclass/class.component'
import { SubjectComponent } from './admin/subject/subject.component';
import { StudentComponent } from './admin/student/student.component';
import { MarkComponent } from './admin/mark/mark.component';
import { MyadminComponent } from './admin/myadmin/myadmin.component';
import { TeacherComponent } from './admin/teacher/teacher.component';
import { NewsComponent } from './admin/news/news.component'
export const adminRoutes = [
  {
    path: 'admin',
    component: AdminComponent,
    children:[
      { path: '', redirectTo:'/admin/class',pathMatch:'full'},
      {
        path:'class',
        component:ClassComponent,
      },
      {
        path:'subject',
        component:SubjectComponent,
      },
      {
        path:'student',
        component:StudentComponent,
      },
      {
        path:'mark',
        component:MarkComponent,
      },
      {
        path:'myadmin',
        component:MyadminComponent,
      },
      {
        path:'teacher',
        component:TeacherComponent,
      },
      {
        path:'news',
        component:NewsComponent,
      }
    ]
  }
];

