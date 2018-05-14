import React from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
// import { Switch} from 'react-router'
// Route-based code splitting

// 方案一
// import Bundle from './bundle';

// 方案二  官方插件
import Loadable from 'react-loadable';
const Loading = () => <div>Loading...</div>;


// 同步引入
// import Home from './Components/Home';
// import About from './Components/Home/About';
// import Info from './Components/Home/About/Info';

// 异步引入

const Cart = Loadable({loader: () => import('./components/cart'),loading: Loading});

const Products = Loadable({loader: () => import('./components/products'),loading: Loading});

const Home = () => (
    <div>
        <h1>Home</h1>
        {/* <Routerlinks /> */}
    </div>
)

const Routerlinks = () => (
    <div>
        <h1>Redux-Router Shopping Cart</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          {/* <li>
            <Link to="/nomatch">No match</Link>
          </li> */}
        </ul>
        <p style={{borderBottom:'10px dotted blue'}}></p>
    </div>
)

const App = () => (
    <Router>
        <div>
            <Routerlinks />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/products" component={Products}/>
                {/* <Route exact path="/home/index" component={IndexPage}/>
                <Route exact path="/home/index/detail" component={Detail}/>
                <Route exact path="/home/about" component={About}/>
                <Route exact path="/home/about/info" component={Info}/>
                <Route exact path="/home/theme" component={Theme}/>
                <Route exact path="/home/theme/list" component={List}/>
                <Route exact path="/home/theme/order" component={Order}/> */}
                <Route render={ () => <h1 style={{color:'red'}}>NoMatch</h1> } />
            </Switch>
        </div>
    </Router>
)

export default App
