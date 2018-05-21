/**
 * @Author: THB
 * @Date:   2018-05-13 13:02:24 PM Sunday
 * @Email:  thbwork2016@gmail.com
 * @Filename: App.js
 * @Last modified by:   haibo
 * @Last modified time: 2018-05-21 18:08:24 PM Monday
 */

import React,{Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import {addToCart, updateCart, deleteFromCart} from '../../redux/actions/cart-actions'


class Index extends Component {
    componentWillMount() {
        console.log('cart props',this.props)
    }
    render() {
        // console.log(this.props)
        const {value, productNum,onIncreaseClick, onUpdateClick, onDeleteClick} = this.props
        return (<div>
            <h2>Cart</h2>
            <div>
                <span>
                    {
                        value.map((item, index) => {
                            return <div key={index}>{`'product':${item.product}, 'quantity':${item.quantity},'unitCost':${item.unitCost}`}
                            </div>
                        })
                    }</span>
                <br/>
            </div>

            <button onClick={onIncreaseClick}>Increase</button>
            <button onClick={onUpdateClick}>Update</button>
            <button onClick={onDeleteClick}>Delete</button>
            <h2>{productNum}</h2>
        </div>)
    }
    componentDidMount() {
        console.log(window)
        console.log(window.constants)
        alert(window.constants.person.name)
    }
}

const mapStateToProps = (state) => {
    // return state
    return {value: state.shoppingCart.cart,productNum:state.shoppingProducts.number}
}

const mapDispatchToProps = (dispatch) => {

    // return ownProps

    //  Add Cart
    // store.dispatch(addToCart('Coffee 500gm', 1, 250));
    // store.dispatch(addToCart('Flour 1kg', 2, 110));
    // store.dispatch(addToCart('Juice 2L', 1, 250));
    //
    //  Update Cart
    // store.dispatch(updateCart('Flour 1kg', 5, 110));
    //
    //  Delete from Cart
    // store.dispatch(deleteFromCart('Coffee 500gm'));

    return {
        //  Add Cart
        onIncreaseClick: () => {
            console.log('addToCart')
            dispatch(addToCart('Coffee 500gm', 66, 250));
        },
        //  Update Cart
        onUpdateClick: () => {
            console.log('updateCart')
            dispatch(updateCart('bread 700g', 555, 110));
        },
        //  Delete Cart
        onDeleteClick: () => {
            console.log('deleteCart')
            dispatch(deleteFromCart('Coffee 500gm'));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
