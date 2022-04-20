import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './entry/register/register.component';
import { SigninComponent } from './entry/signin/signin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
 { path: 'signin', component: SigninComponent },
 { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
