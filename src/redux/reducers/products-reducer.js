/**
 * @Author: THB
 * @Date:   2018-05-13 15:16:03 PM Sunday
 * @Email:  thbwork2016@gmail.com
 * @Filename: products-reducer.js
 * @Last modified by:   THB
 * @Last modified time: 2018-05-13 18:58:09 PM Sunday
 */





 // src/reducers/products-reducer.js

 import  { ADD_TO_PRODUCTS }  from '../actions/products-actions';
 import  { UPDATE_PRODUCTS }  from '../actions/products-actions';
 import  { DELETE_FROM_PRODUCTS }  from '../actions/products-actions';
 import  { CHANGENUM_FROM_PRODUCTS }  from '../actions/products-actions';


 const initialState = {
   products: [
     {
       product: 'bread 999g',
       quantity: 999,
       unitCost: 90
     },
     {
       product: 'milk 500ml',
       quantity: 1,
       unitCost: 47
     }
     ],
     number:1,
 }

 export default function(state=initialState, action) {
   switch (action.type) {
     case ADD_TO_PRODUCTS: {
       return {
         ...state,
         products: [...state.products, action.payload]
       }
     }
     case UPDATE_PRODUCTS: {
       return {
         ...state,
         products: state.products.map(item => item.product === action.payload.product ? action.payload : item)
       }
     }

     case DELETE_FROM_PRODUCTS: {
       return {
         ...state,
         products: state.products.filter(item => item.product !== action.payload.product)
       }
   }
   case CHANGENUM_FROM_PRODUCTS: {
     return {
       ...state,
       number: state.number + 1
     }
 }


     default:
       return state;
   }
 }
