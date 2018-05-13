/**
 * @Author: THB
 * @Date:   2018-05-12 17:45:22 PM Saturday
 * @Email:  thbwork2016@gmail.com
 * @Filename: products-actions.js
 * @Last modified by:   THB
 * @Last modified time: 2018-05-13 18:51:14 PM Sunday
 */



 // src/actions/products-actions.js

 export const ADD_TO_PRODUCTS = 'ADD_TO_PRODUCTS';
 export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
 export const DELETE_FROM_PRODUCTS = 'DELETE_FROM_PRODUCTS';
 export const CHANGENUM_FROM_PRODUCTS = 'CHANGENUM_FROM_PRODUCTS';


 export function addToProducts(product, quantity, unitCost) {
   return {
     type: ADD_TO_PRODUCTS,
     payload: { product, quantity, unitCost }
   }
 }

 export function updateProducts(product, quantity, unitCost) {
  return {
    type: UPDATE_PRODUCTS,
    payload: {
      product,
      quantity,
      unitCost
    }
  }
}

export function deleteFromProducts(product) {
  return {
    type: DELETE_FROM_PRODUCTS,
    payload: {
      product
    }
  }
}

export function changeNumFromProducts(product) {
  return {
    type: CHANGENUM_FROM_PRODUCTS,
    payload: {
      product
    }
  }
}
