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
import {CollectionItemComponent} from './collection-item/collection-item.component';
import {MyCollectionItemComponent} from './my-collection-item/my-collection-item.component';
import {ManageUserComponent} from './manage-user/manage-user.component';
import {AddNewItemComponent} from './add-new-item/add-new-item.component';
import {ManageCommentComponent} from './manage-comment/manage-comment.component';
import {PolicyComponent} from './policy/policy.component';
import {ManagePolicyComponent} from './manage-policy/manage-policy.component';
import {NoticeComponent} from './notice/notice.component';

const routes: Routes = [
  {path: '', component: ItemsWrapComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'collection', component: CollectionComponent},
  {path: 'collection/createCollection', component: CreateCollectionComponent},
  {path: 'myCollection', component: MyCollectionComponent},
  {path: 'collection/:id', component: CollectionItemComponent},
  {path: 'myCollection/:id', component: MyCollectionItemComponent},
  {path: 'manageUser', component: ManageUserComponent},
  {path: 'addNewItem', component: AddNewItemComponent},
  {path: 'manageComment', component: ManageCommentComponent},
  {path: 'policy', component: PolicyComponent},
  {path: 'managePolicy', component: ManagePolicyComponent},
  {path: 'notice', component: NoticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
