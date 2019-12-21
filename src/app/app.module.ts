import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserGridComponent } from './components/user-grid/user-grid.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserService } from './service/user/user.service';
import { AppRoutingModule } from './app-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './service/authetication/authentication.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './Guards/auth-guard.service';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ErrorViewModule } from './modules/error-view/error-view.module';


@NgModule({
  declarations: [
    AppComponent,
    UserGridComponent,
    UserEditComponent,
    UserAddComponent,
    LoginComponent,
    DashboardComponent,
    MyProfileComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxDatatableModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    ErrorViewModule
  ],
  providers: [UserService, AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
