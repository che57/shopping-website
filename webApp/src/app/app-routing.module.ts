import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemsWrapComponent} from './items-wrap/items-wrap.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {AboutComponent} from './about/about.component';

const routes: Routes = [
  {path: '', component: ItemsWrapComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
