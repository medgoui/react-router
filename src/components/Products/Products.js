import React from 'react';
import {Link, Route} from 'react-router-dom';
import Product from './Product/Product';
import './Products.css';

const Products = (props) => {

    const productData = [
        {
            id: 1,
            name: 'NIKE Liteforce Blue Sneakers',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
            status: 'Available'
        
        },
        {
            id: 2,
            name: 'Stylised Flip Flops and Slippers',
            description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
            status: 'Out of Stock'
        
        },
        {
            id: 3,
            name: 'ADIDAS Adispree Running Shoes',
            description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
            status: 'Available'
        },
        {
            id: 4,
            name: 'ADIDAS Mid Sneakers',
            description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
            status: 'Out of Stock'
        },
        
        ];
    let linkedList = productData.map(product => {
        return (
            <li key={product.id}>
            <Link to={`${props.match.url}/${product.id}`}>{product.name}</Link>
            </li>
            );
    })
    return(
        <div className="Products"> 
        <div>
            <h1>Products</h1>
            <ul>
                {linkedList}
            </ul>
        </div>
        <div>
        <Route 
            path={`${props.match.url}/:id`} 
            render={(props) => <Product data={productData} {...props} />} />
        <Route 
            path={props.match.url} 
            exact 
            render={() => (<div>Please select a product</div>)}/>
        </div>
        </div>
    );
}

export default Products;