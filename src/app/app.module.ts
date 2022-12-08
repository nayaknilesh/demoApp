import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustompipePipe } from './custompipe.pipe';
import { AllusersComponent } from './allusers/allusers.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CustompipePipe,
    AllusersComponent,
    UserdetailsComponent,
    ParentComponent,
    ChildrenComponent,
    ViewchildComponent,
    IndexComponent,
    HomeComponent,
    NoPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
