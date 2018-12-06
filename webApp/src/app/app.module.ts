import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { ItemsWrapComponent } from './items-wrap/items-wrap.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
import { CollectionComponent } from './collection/collection.component';
import { CreateCollectionComponent } from './create-collection/create-collection.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { CollectionItemComponent } from './collection-item/collection-item.component';
import { MyCollectionItemComponent } from './my-collection-item/my-collection-item.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { ManageCommentComponent } from './manage-comment/manage-comment.component';
import { PolicyComponent } from './policy/policy.component';
import { ManagePolicyComponent } from './manage-policy/manage-policy.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsWrapComponent,
    SignInComponent,
    SignUpComponent,
    AboutComponent,
    ItemComponent,
    CartComponent,
    CollectionComponent,
    CreateCollectionComponent,
    MyCollectionComponent,
    CollectionItemComponent,
    MyCollectionItemComponent,
    ManageUserComponent,
    AddNewItemComponent,
    ManageCommentComponent,
    PolicyComponent,
    ManagePolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    HttpClientModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
