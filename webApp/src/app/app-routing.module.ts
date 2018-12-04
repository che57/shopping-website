import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemsWrapComponent} from './items-wrap/items-wrap.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {AboutComponent} from './about/about.component';
import {ItemComponent} from './item/item.component';
import {CartComponent} from './cart/cart.component';
import {CollectionComponent} from './collection/collection.component';
import {CreateCollectionComponent} from './create-collection/create-collection.component';
import {MyCollectionComponent} from './my-collection/my-collection.component';

const routes: Routes = [
  {path: '', component: ItemsWrapComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'collection', component: CollectionComponent},
  {path: 'collection/createCollection', component: CreateCollectionComponent},
  {path: 'myCollection', component: MyCollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
