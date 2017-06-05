import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
//导入admin和login模块
import {AdminModule} from './admin/admin.module'
import {LoginModule} from './login/login.module'

//导入主路由
import {appRoutes} from './app.route'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    LoginModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
