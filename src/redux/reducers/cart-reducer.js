/**
 * @Author: THB
 * @Date:   2018-05-12 17:45:46 PM Saturday
 * @Email:  thbwork2016@gmail.com
 * @Filename: cart-reducer.js
 * @Last modified by:   THB
 * @Last modified time: 2018-05-12 18:03:14 PM Saturday
 */



 // src/reducers/cart-reducer.js

 import  { ADD_TO_CART }  from '../actions/cart-actions';
 import  { UPDATE_CART }  from '../actions/cart-actions';
 import  { DELETE_FROM_CART }  from '../actions/cart-actions';

 
 const initialState = {
   cart: [
     {
       product: 'bread 700g',
       quantity: 2,
       unitCost: 90
     },
     {
       product: 'milk 500ml',
       quantity: 1,
       unitCost: 47
     }
   ]
 }

 export default function(state=initialState, action) {
   switch (action.type) {
     case ADD_TO_CART: {
       return {
         ...state,
         cart: [...state.cart, action.payload]
       }
     }
     case UPDATE_CART: {
       return {
         ...state,
         cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
       }
     }

     case DELETE_FROM_CART: {
       return {
         ...state,
         cart: state.cart.filter(item => item.product !== action.payload.product)
       }
     }

     default:
       return state;
   }
 }
