import { Injectable } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of} from "rxjs";
import { Action } from "@ngrx/store";
import { DeleteProductActionError, DeleteProductActionSuccess, EditProductActionError, EditProductActionSuccess, GetAllProductsActionError, GetAllProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess, NewProductActionSuccess, ProductsAction, ProductsActionTypes, SaveProductActionError, SaveProductActionSuccess, SearchProductsActionError, SearchProductsActionSuccess, SelectProductActionSuccess, UpdateProductActionError, UpdateProductActionSuccess, } from "./products.actions";

@Injectable()
export class ProductsEffects{
    constructor(private productsService:ProductsService,private effectActions:Actions){


    }
    getAllProductsEffect:Observable<ProductsAction>=createEffect(
        ()=>this.effectActions.pipe(
           ofType(ProductsActionTypes.GET_ALL_PRODUCTS),
           mergeMap((action:ProductsAction)=>{
             return this.productsService.getAllProducts().pipe(
                map((products)=>new GetAllProductsActionSuccess(products)),
                catchError((err)=>of(new GetAllProductsActionError(err.message)
                ))
             )
           })
        )
    );

    getSelectedProductsEffect:Observable<ProductsAction>=createEffect(
      ()=>this.effectActions.pipe(
         ofType(ProductsActionTypes.GET_SELECTED_PRODUCTS),
         mergeMap((action:ProductsAction)=>{
           return this.productsService.getSelectedProducts().pipe(
              map((products)=>new GetSelectedProductsActionSuccess(products)),
              catchError((err)=>of(new GetSelectedProductsActionError(err.message)
              ))
           )
         })
      )
  );

  searchProductsEffect:Observable<ProductsAction>=createEffect(
    ()=>this.effectActions.pipe(
       ofType(ProductsActionTypes.SEARCH_PRODUCTS),
       mergeMap((action:ProductsAction)=>{
         return this.productsService.searchProducts(action.payload).pipe(
            map((products)=>new SearchProductsActionSuccess(products)),
            catchError((err)=>of(new SearchProductsActionError(err.message)
            ))
         )
       })
    )
);
selectProductEffect:Observable<ProductsAction>=createEffect(
   ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.SELECT_PRODUCT),
      mergeMap((action:ProductsAction)=>{
        return this.productsService.select(action.payload).pipe(
           map((product)=>new SelectProductActionSuccess(product)),
           catchError((err)=>of(new SearchProductsActionError(err.message)
           ))
        )
      })
   )
);

deleteProductEffect:Observable<ProductsAction>=createEffect(
   ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.DELETE_PRODUCT),
      mergeMap((action:ProductsAction)=>{
        return this.productsService.deleteProduct(action.payload.id).pipe(
           map(()=>new DeleteProductActionSuccess(action.payload)),
           catchError((err)=>of(new DeleteProductActionError(err.message)
           ))
        )
      })
   )
);
newteProductEffect:Observable<ProductsAction>=createEffect(
   ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.NEW_PRODUCT),
      map((action:ProductsAction)=>{
        return  new  NewProductActionSuccess({})
        
      })
   )
);
saveProductEffect:Observable<ProductsAction>=createEffect(
   ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.SAVE_PRODUCT),
      mergeMap((action:ProductsAction)=>{
        return this.productsService.saveProduct(action.payload).pipe(
           map((product)=>new SaveProductActionSuccess(product)),
           catchError((err)=>of(new SaveProductActionError(err.message)
           ))
        )
      })
   )
);
editProductEffect:Observable<ProductsAction>=createEffect(
   ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.EDIT_PRODUCT),
      mergeMap((action:ProductsAction)=>{
        return this.productsService.getProducts(action.payload).pipe(
           map((product)=>new EditProductActionSuccess(product)),
           catchError((err)=>of(new EditProductActionError(err.message)
           ))
        )
      })
   )
);
updateProductEffect:Observable<ProductsAction>=createEffect(
   ()=>this.effectActions.pipe(
      ofType(ProductsActionTypes.UPDATE_PRODUCT),
      mergeMap((action:ProductsAction)=>{
        return this.productsService.updateProduct(action.payload).pipe(
           map((product)=>new UpdateProductActionSuccess(product)),
           catchError((err)=>of(new UpdateProductActionError(err.message)
           ))
        )
      })
   )
);
}