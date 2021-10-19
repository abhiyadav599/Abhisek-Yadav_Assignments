import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { ResturantComponent } from './resturant/resturant.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  // {
  //   path: '', redirectTo: 'login', pathMatch:'full'
  // },
  {
    component: LoginComponent,
    path:'login'
  },
  {
    component: SignupComponent,
    path:'signup'
  },
  {
    component: UserComponent,
    path:'user'
  },
  {
    component: AdminComponent,
    path:'admin'
  },
  {
    component: MenuComponent,
    path:'menu'
  },
  {
    component: ResturantComponent,
    path:'resturant'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
