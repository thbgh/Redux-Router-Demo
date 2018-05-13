/**
 * @Author: THB
 * @Date:   2018-05-12 17:45:57 PM Saturday
 * @Email:  thbwork2016@gmail.com
 * @Filename: index.js
 * @Last modified by:   THB
 * @Last modified time: 2018-05-13 15:55:04 PM Sunday
 */



 // src/reducers/index.js

 import { combineReducers } from 'redux';
 import productsReducer from './products-reducer';
 import cartReducer from './cart-reducer';

 const allReducers = {
   shoppingProducts: productsReducer,
   shoppingCart: cartReducer
 }

 const rootReducer = combineReducers(allReducers);

 export default rootReducer;
