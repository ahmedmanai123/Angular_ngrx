import { Action } from "@ngrx/store";
import { Product } from "../model/product.model";
import { ProductsAction, ProductsActionTypes } from "./products.actions";

export enum ProductsStateEnum{
    LOADING="loading",
    LOADED="loaded",
    SUCCESS="Success",
    ERROR="Error",
    INITIAL="Initial",
    NEW="NEW",
    EDIT="EDIT",
    UPDATED="UPDATED"
}
export interface ProductsState{
    products:Product[],
    errorMessage:string,
    dataState:ProductsStateEnum,
    currentProduct:Product|null,
    currentAction:ProductsAction|null
}
const initState:ProductsState={
    products:[],
    errorMessage:"",
    dataState:ProductsStateEnum.INITIAL,
    currentProduct:null,
    currentAction:null
}
export function productsReducer( state=initState,action:Action):ProductsState{
    switch(action.type){
        case ProductsActionTypes.GET_ALL_PRODUCTS:
        return {...state,dataState:ProductsStateEnum.LOADING,currentAction:<ProductsAction>action}
        case ProductsActionTypes.GET_ALL_PRODUCTS_SUCCESS:
        return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductsAction>action).payload,currentAction:<ProductsAction>action}
        case ProductsActionTypes.GET_ALL_PRODUCTS_ERROR:
            return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsAction>action).payload,currentAction:<ProductsAction>action}
        

            case ProductsActionTypes.GET_SELECTED_PRODUCTS:
        return {...state,dataState:ProductsStateEnum.LOADING,currentAction:<ProductsAction>action}
        case ProductsActionTypes.GET_SELECTED_PRODUCTS_SUCCESS:
        return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductsAction>action).payload,currentAction:<ProductsAction>action}
        case ProductsActionTypes.GET_SELECTED_PRODUCTS_ERROR:
            return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsAction>action).payload,currentAction:<ProductsAction>action}
           
          

            case ProductsActionTypes.SEARCH_PRODUCTS:
                return {...state,dataState:ProductsStateEnum.LOADING,currentAction:<ProductsAction>action}
                case ProductsActionTypes.SEARCH_PRODUCTS_SUCCESS:
                return {...state,dataState:ProductsStateEnum.LOADED,products:(<ProductsAction>action).payload,currentAction:<ProductsAction>action}
                case ProductsActionTypes.SEARCH_PRODUCTS_ERROR:
                    return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsAction>action).payload,currentAction:<ProductsAction>action}
                   
                    case ProductsActionTypes.SELECT_PRODUCT:
                return {...state,dataState:ProductsStateEnum.LOADING,currentAction:<ProductsAction>action}
                case ProductsActionTypes.SELECT_PRODUCT_SUCCESS:
                    let product:Product=(<ProductsAction>action).payload
                    let listProducts=[...state.products];
                   let  data:Product[]= listProducts.map(p=>p.id==product.id?product:p);

                return {...state,dataState:ProductsStateEnum.LOADED,products:data,currentAction:<ProductsAction>action}
                case ProductsActionTypes.SELECT_PRODUCT_ERROR:
                    return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsAction>action).payload,currentAction:<ProductsAction>action}
                   


                    case ProductsActionTypes.DELETE_PRODUCT:
                        return {...state,dataState:ProductsStateEnum.LOADING,currentAction:<ProductsAction>action}
                        case ProductsActionTypes.DELETE_PRODUCT_SUCCESS:
                            let p:Product=(<ProductsAction>action).payload
                            let index=state.products.indexOf(p);
                            let productsList=[...state.products];
                                productsList.splice(index,1);
                        return {...state,dataState:ProductsStateEnum.LOADED,products:productsList,currentAction:<ProductsAction>action}
                        case ProductsActionTypes.DELETE_PRODUCT_ERROR:
                            return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsAction>action).payload,currentAction:<ProductsAction>action}
                           


                            case ProductsActionTypes.NEW_PRODUCT:
                        return {...state,dataState:ProductsStateEnum.LOADING,currentAction:<ProductsAction>action}
                        case ProductsActionTypes.NEW_PRODUCT_SUCCESS:
                            
                        return {...state,dataState:ProductsStateEnum.NEW,currentAction:<ProductsAction>action}
                        case ProductsActionTypes.NEW_PRODUCT_ERROR:
                            return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsAction>action).payload,currentAction:<ProductsAction>action}
                           

                            case ProductsActionTypes.SAVE_PRODUCT:
                                return {...state,dataState:ProductsStateEnum.LOADING,currentAction:<ProductsAction>action}
                                case ProductsActionTypes.SAVE_PRODUCT_SUCCESS:
                                    let prods:Product[]=[...state.products];
                                    prods.push((<ProductsAction>action).payload);
                                return {...state,dataState:ProductsStateEnum.LOADED,products:prods,currentAction:<ProductsAction>action}
                                case ProductsActionTypes.SAVE_PRODUCT_ERROR:
                                    return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsAction>action).payload,currentAction:<ProductsAction>action}
                                   

                                    case ProductsActionTypes.EDIT_PRODUCT:
                                return {...state,dataState:ProductsStateEnum.LOADING,currentAction:<ProductsAction>action}
                                case ProductsActionTypes.EDIT_PRODUCT_SUCCESS:
                                
                                return {...state,dataState:ProductsStateEnum.LOADED,currentProduct:(<ProductsAction>action).payload,currentAction:<ProductsAction>action}
                                case ProductsActionTypes.EDIT_PRODUCT_ERROR:
                                    return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsAction>action).payload,currentAction:<ProductsAction>action}
                                    

                                    case ProductsActionTypes.UPDATE_PRODUCT:
                                return {...state,dataState:ProductsStateEnum.LOADING,currentAction:<ProductsAction>action}
                                case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS:
                                let updatedProduct:Product=(<ProductsAction>action).payload;
                                let updatedProducts:Product[]=state.products.map(p=>(p.id==updatedProduct.id)?updatedProduct:p);
                                return {...state,dataState:ProductsStateEnum.UPDATED,products:updatedProducts,currentAction:<ProductsAction>action}
                                case ProductsActionTypes.UPDATE_PRODUCT_ERROR:
                                    return {...state,dataState:ProductsStateEnum.ERROR,errorMessage:(<ProductsAction>action).payload,currentAction:<ProductsAction>action}
                                   


                       default :return {...state}
    }
}