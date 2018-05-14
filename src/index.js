// src/index.js

import store from './redux/store.js';
// import {addToCart, updateCart, deleteFromCart} from './redux/actions/cart-actions';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

import App from './router'

ReactDOM.render(
    <Provider store={store}>
        <div>
            {/* <h1>Redux Shopping Cart</h1>
            <p style={{borderBottom:'10px dotted blue'}}></p> */}
            <App/>
        </div>
    </Provider>,
    document.getElementById('root')
);

console.log("initial state: ", store.getState());

store.subscribe(() => console.log("changed state: ", store.getState()));

// Add Cart
// store.dispatch(addToCart('Coffee 500gm', 1, 250));
// store.dispatch(addToCart('Flour 1kg', 2, 110));
// store.dispatch(addToCart('Juice 2L', 1, 250));
//
// // Update Cart
// store.dispatch(updateCart('Flour 1kg', 5, 110));
//
// // Delete from Cart
// store.dispatch(deleteFromCart('Coffee 500gm'));

// unsubscribe();
