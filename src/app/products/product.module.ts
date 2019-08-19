import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from "src/app/products/product-detail.component";
import { ConvertToSpacesPipe } from "src/app/shared/convert-to-spaces.pipe";
import { RouterModule } from "@angular/router";
import { ProductDetailGuard } from "src/app/products/product-detail.guard";
import { SharedModule } from '../shared/shared.module';




@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard], component:ProductDetailComponent}
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
  ]
})
export class ProductModule { }
