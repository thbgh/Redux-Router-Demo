/**
 * @Author: THB
 * @Date:   2018-05-13 17:12:29 PM Sunday
 * @Email:  thbwork2016@gmail.com
 * @Filename: index.js
 * @Last modified by:   THB
 * @Last modified time: 2018-05-14 21:14:23 PM Monday
 */



import React,{Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import {addToProducts, updateProducts, deleteFromProducts,changeNumFromProducts} from '../../redux/actions/products-actions';
import {addToCart, updateCart, deleteFromCart} from '../../redux/actions/cart-actions';


class Index extends Component {
    componentWillMount() {
        console.log('products props',this.props)
    }
    render() {
        // console.log(this.props)
        const {number, onChangeNumClick, value, onIncreaseClick, onUpdateClick, onDeleteClick, onIncreaseCARTClick} = this.props
        return (<div>
            <h2>Products</h2>
            <div>
                {value.map((item, index) => {
                        return <div key={index}>{`'product':${item.product},'quantity':${item.quantity}`}
                        </div>
                    })
                }<br/>
            </div>


            <button onClick={onIncreaseClick}>Increase</button>
            <button onClick={onUpdateClick}>Update</button>
            <button onClick={onDeleteClick}>Delete</button><br/><br/>
            <span>在Product组件中改变Cart组件中的数据 </span>
            <button onClick={onIncreaseCARTClick}>IncreaseCART</button>

            <h3>
                {number}
            </h3>
            <button onClick={onChangeNumClick}>ChangeNum</button><br/><br/>
        </div>)
    }
    componentDidMount() {
        // console.log(this.props)

    }
}

const mapStateToProps = (state) => {
    // return state
    return {value: state.shoppingProducts.products,number: state.shoppingProducts.number}
}

const mapDispatchToProps = (dispatch) => {

    // return ownProps

    //  Add Products
    // store.dispatch(addToProducts('Coffee 500gm', 1, 250));
    // store.dispatch(addToProducts('Flour 1kg', 2, 110));
    // store.dispatch(addToProducts('Juice 2L', 1, 250));
    //
    //  Update Products
    // store.dispatch(updateProducts('Flour 1kg', 5, 110));
    //
    //  Delete from Products
    // store.dispatch(deleteFromProducts('Coffee 500gm'));

    return {
        //  Add Products
        onIncreaseClick: () => {
            console.log('addToProducts')
            dispatch(addToProducts('Cof 500gm', 66, 250));
            //添加了Product，之后Cart中相应加上
            dispatch(addToCart('Cof 500gm', 66, 250));
        },
        //  Update Products
        onUpdateClick: () => {
            console.log('updateProducts')
            dispatch(updateProducts('bread 999g', 555, 110));
        },
        //  Delete Products
        onDeleteClick: () => {
            console.log('deleteProducts')
            dispatch(deleteFromProducts('Cof 500gm'));
        },
        //在Product组件中改变Cart组件中的数据
        onIncreaseCARTClick: () => {
            console.log('IncreaseCART')
            dispatch(addToCart('Cof 500gm',1,1));
        },
        //在Product组件中改变自身组件中的number数据
        onChangeNumClick: () => {
            console.log('ChangeNumClick')
            dispatch(changeNumFromProducts(666));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
