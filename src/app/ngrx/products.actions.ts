import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";

export enum ProductsActionTypes{
    GET_ALL_PRODUCTS="[Products] Get All products",
    GET_ALL_PRODUCTS_SUCCESS="[Products] Get All products Success",
    GET_ALL_PRODUCTS_ERROR="[Products] Get All products Error",


    GET_SELECTED_PRODUCTS="[Products] Get Selected products",
    GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get Selected  products Success",
    GET_SELECTED_PRODUCTS_ERROR="[Products] Get Selected  products Error",
     

    SEARCH_PRODUCTS="[Products] Get Search products",
    SEARCH_PRODUCTS_SUCCESS="[Products] Get Search  products Success",
    SEARCH_PRODUCTS_ERROR="[Products] Get Search  products Error",
    

    SELECT_PRODUCT="[Products] Get Select products",
    SELECT_PRODUCT_SUCCESS="[Products] Get Select  products Success",
    SELECT_PRODUCT_ERROR="[Products] Get Select products Error",

    
     DELETE_PRODUCT="[Products] Get Delete products",
     DELETE_PRODUCT_SUCCESS="[Products] Get Delete  products Success",
     DELETE_PRODUCT_ERROR="[Products] Get Delete products Error",
         


     NEW_PRODUCT="[Products] Get NEW products",
     NEW_PRODUCT_SUCCESS="[Products] Get NEW  products Success",
     NEW_PRODUCT_ERROR="[Products] Get NEW products Error",
     

     SAVE_PRODUCT="[Products] Save NEW products",
     SAVE_PRODUCT_SUCCESS="[Products] Save NEW  products Success",
     SAVE_PRODUCT_ERROR="[Products] Save NEW products Error",
    
     EDIT_PRODUCT="[Products] Edit NEW products",
     EDIT_PRODUCT_SUCCESS="[Products] Edit  products Success",
     EDIT_PRODUCT_ERROR="[Products] Edit products Error",
    

     UPDATE_PRODUCT="[Products] Update NEW products",
     UPDATE_PRODUCT_SUCCESS="[Products] Update  products Success",
     UPDATE_PRODUCT_ERROR="[Products] Update products Error",

}
export class GetAllProductsAction implements Action{
    type:ProductsActionTypes=ProductsActionTypes.GET_ALL_PRODUCTS;
    constructor(public payload:any){}
 }
 export class GetAllProductsActionSuccess implements Action{
    type:ProductsActionTypes=ProductsActionTypes.GET_ALL_PRODUCTS_SUCCESS;
    constructor(public payload:Product[]){}
 }
 export class GetAllProductsActionError implements Action{
    type:ProductsActionTypes=ProductsActionTypes.GET_ALL_PRODUCTS_ERROR;
    constructor(public payload:String){}
 }

 export class GetSelectedProductsAction implements Action{
   type:ProductsActionTypes=ProductsActionTypes.GET_SELECTED_PRODUCTS;
   constructor(public payload:any){}
}
export class GetSelectedProductsActionSuccess implements Action{
   type:ProductsActionTypes=ProductsActionTypes.GET_SELECTED_PRODUCTS_SUCCESS;
   constructor(public payload:Product[]){}
}
export class GetSelectedProductsActionError implements Action{
   type:ProductsActionTypes=ProductsActionTypes.GET_SELECTED_PRODUCTS_ERROR;
   constructor(public payload:String){}
}

export class SearchProductsAction implements Action{
   type:ProductsActionTypes=ProductsActionTypes.SEARCH_PRODUCTS;
   constructor(public payload:string){}
}
export class SearchProductsActionSuccess implements Action{
   type:ProductsActionTypes=ProductsActionTypes.SEARCH_PRODUCTS_SUCCESS;
   constructor(public payload:Product[]){}
}
export class SearchProductsActionError implements Action{
   type:ProductsActionTypes=ProductsActionTypes.SEARCH_PRODUCTS_ERROR;
   constructor(public payload:String){}
}

export class SelectProductAction implements Action{
   type:ProductsActionTypes=ProductsActionTypes.SELECT_PRODUCT;
   constructor(public payload:Product){}
}
export class SelectProductActionSuccess implements Action{
   type:ProductsActionTypes=ProductsActionTypes.SELECT_PRODUCT_SUCCESS;
   constructor(public payload:Product){}
}
export class SelectProductActionError implements Action{
   type:ProductsActionTypes=ProductsActionTypes.SELECT_PRODUCT_ERROR;
   constructor(public payload:Product){}
}


export class DeleteProductAction implements Action{
   type:ProductsActionTypes=ProductsActionTypes.DELETE_PRODUCT;
   constructor(public payload:Product){}
}
export class DeleteProductActionSuccess implements Action{
   type:ProductsActionTypes=ProductsActionTypes.DELETE_PRODUCT_SUCCESS;
   constructor(public payload:Product){}
}
export class DeleteProductActionError implements Action{
   type:ProductsActionTypes=ProductsActionTypes.DELETE_PRODUCT_ERROR;
   constructor(public payload:String){}
}


export class NewProductAction implements Action{
   type:ProductsActionTypes=ProductsActionTypes.NEW_PRODUCT;
   constructor(public payload:any){}
}
export class NewProductActionSuccess implements Action{
   type:ProductsActionTypes=ProductsActionTypes.NEW_PRODUCT_SUCCESS;
   constructor(public payload:any){}
}
export class NewProductActionError implements Action{
   type:ProductsActionTypes=ProductsActionTypes.NEW_PRODUCT_ERROR;
   constructor(public payload:String){}
}

export class SaveProductAction implements Action{
   type:ProductsActionTypes=ProductsActionTypes.SAVE_PRODUCT;
   constructor(public payload:Product){}
}
export class SaveProductActionSuccess implements Action{
   type:ProductsActionTypes=ProductsActionTypes.SAVE_PRODUCT_SUCCESS;
   constructor(public payload:Product){}
}
export class SaveProductActionError implements Action{
   type:ProductsActionTypes=ProductsActionTypes.SAVE_PRODUCT_ERROR;
   constructor(public payload:String){}
}


export class EditProductAction implements Action{
   type:ProductsActionTypes=ProductsActionTypes.EDIT_PRODUCT;
   constructor(public payload:number){}
}
export class EditProductActionSuccess implements Action{
   type:ProductsActionTypes=ProductsActionTypes.EDIT_PRODUCT_SUCCESS;
   constructor(public payload:Product){}
}
export class EditProductActionError implements Action{
   type:ProductsActionTypes=ProductsActionTypes.EDIT_PRODUCT_ERROR;
   constructor(public payload:String){}
}

export class UpdateProductAction implements Action{
   type:ProductsActionTypes=ProductsActionTypes.UPDATE_PRODUCT;
   constructor(public payload:Product){}
}
export class UpdateProductActionSuccess implements Action{
   type:ProductsActionTypes=ProductsActionTypes.UPDATE_PRODUCT_SUCCESS;
   constructor(public payload:Product){}
}
export class UpdateProductActionError implements Action{
   type:ProductsActionTypes=ProductsActionTypes.UPDATE_PRODUCT_ERROR;
   constructor(public payload:String){}
}
 export type ProductsAction=GetAllProductsAction |GetAllProductsActionSuccess | GetAllProductsActionError|
 GetSelectedProductsAction |GetSelectedProductsActionSuccess | GetSelectedProductsActionError|
 SearchProductsAction |SearchProductsActionSuccess | SearchProductsActionError|
 SelectProductAction|  SelectProductActionSuccess|SelectProductActionError
 | DeleteProductAction|  DeleteProductActionSuccess|DeleteProductActionError|
  NewProductAction|  NewProductActionSuccess|NewProductActionError|
  SaveProductAction|  SaveProductActionSuccess|SaveProductActionError|
  EditProductAction|  EditProductActionSuccess|EditProductActionError| 
  UpdateProductAction|  UpdateProductActionSuccess|UpdateProductActionError;