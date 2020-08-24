import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Category from './components/Category/Category';
import Products from './components/Products/Products';
import AdminArea from './components/AdminArea/AdminArea';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/admin-area">Admin Area</Link></li>
          </ul>
        </nav>
      </header>
      <Switch>
      <Route path="/home" exact component={Home}/>
      <Route path="/category" component={Category}/>
      <Route path="/products" component={Products}/>
      <Route path="/admin-area" component={AdminArea}/>
      </Switch>
    </div>
  );
}

export default App;
