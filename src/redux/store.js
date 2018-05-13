/**
 * @Author: THB
 * @Date:   2018-05-12 17:46:14 PM Saturday
 * @Email:  thbwork2016@gmail.com
 * @Filename: store.js
 * @Last modified by:   THB
 * @Last modified time: 2018-05-13 15:05:36 PM Sunday
 */



 // src/store.js
 import { createStore } from "redux";
 import { composeWithDevTools } from 'redux-devtools-extension';
 import rootReducer from './reducers';

 const store = createStore(rootReducer, composeWithDevTools());
 // let unsubscribe = store.subscribe(() => console.log("changed state: ", store.getState()));

 export default store;
