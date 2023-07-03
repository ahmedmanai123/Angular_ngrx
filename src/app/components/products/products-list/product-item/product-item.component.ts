import { Component, Input } from '@angular/core';
import {  Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/model/product.model';
import { DeleteProductAction, SelectProductAction } from 'src/app/ngrx/products.actions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
@Input() product:Product|null=null;
constructor(private store:Store,private router:Router){

}
onSelect(product:Product){
this.store.dispatch(new SelectProductAction(product))
}
onDelete(product:Product){
  this.store.dispatch(new DeleteProductAction(product))

}
onEdit(product:Product){
  this.router.navigateByUrl("/editProduct/"+product.id);
}

}
