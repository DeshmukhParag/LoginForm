import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGridComponent } from './components/user-grid/user-grid.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuardService } from './Guards/auth-guard.service';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

const routes: Routes = [
  { path: '', component: UserAddComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-edit', component: UserEditComponent, canActivate: [AuthGuardService] },
  { path: 'user-add', component: UserAddComponent },
  { path: 'user-grid', component: UserGridComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
