import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductImageDetailComponent } from './product-image-detail/product-image-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'productImages/:productId', component: ProductImageDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

