import React from 'react';

const Product = (props) => {
    console.log(props);
    let product = props.data.find(p => p.id == props.match.params.id);
    let productData;
    if(product) {
        productData = (
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <hr />
                <h4>{product.status}</h4>
            </div>
        )
    } else {
        productData = <h1>Sorry product not found</h1>
    }
    return (
    <div>
        {productData}
    </div>)
}

export default Product;