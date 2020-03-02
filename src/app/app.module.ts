import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { UserListComponent } from './user-list/user-list.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { TestGroundComponent } from './test-ground/test-ground.component';

@NgModule({
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      HttpClientModule,
      RouterModule.forRoot([
         {path: '', component: ProductListComponent},
         {path: 'product/:productId', component: ProductDetailsComponent},
         {path: 'cart', component: CartComponent},
         {path: 'shipping', component: ShippingComponent},
         {path: 'users', component : UserListComponent},
         {path: 'animation', component: OpenCloseComponent},
         {path: 'testground', component: TestGroundComponent},
      ])
   ],
   declarations: [
      AppComponent,
      TopBarComponent,
      ProductListComponent,
      ProductAlertComponent,
      ProductDetailsComponent,
      CartComponent,
      ShippingComponent,
      UserListComponent,
      OpenCloseComponent,
      TestGroundComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

