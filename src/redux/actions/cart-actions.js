/**
 * @Author: THB
 * @Date:   2018-05-12 17:45:22 PM Saturday
 * @Email:  thbwork2016@gmail.com
 * @Filename: cart-actions.js
 * @Last modified by:   THB
 * @Last modified time: 2018-05-12 18:02:06 PM Saturday
 */



 // src/actions/cart-actions.js

 export const ADD_TO_CART = 'ADD_TO_CART';
 export const UPDATE_CART = 'UPDATE_CART';
 export const DELETE_FROM_CART = 'DELETE_FROM_CART';



 export function addToCart(product, quantity, unitCost) {
   return {
     type: ADD_TO_CART,
     payload: { product, quantity, unitCost }
   }
 }

 export function updateCart(product, quantity, unitCost) {
  return {
    type: UPDATE_CART,
    payload: {
      product,
      quantity,
      unitCost
    }
  }
}

export function deleteFromCart(product) {
  return {
    type: DELETE_FROM_CART,
    payload: {
      product
    }
  }
}
