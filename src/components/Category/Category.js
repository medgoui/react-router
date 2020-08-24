import React from 'react';
import { Link, Route } from 'react-router-dom';
const Category = (props) => {
    console.log(props);
    return(
        <div>
        <nav>
            <ul>
                <li><Link to={`${props.match.url}/shoes`}>Shoes</Link></li>
                <li><Link to={`${props.match.url}/boots`}>Boots</Link></li>
                <li><Link to={`${props.match.url}/footwear`}>Footwear</Link></li>
            </ul>
        </nav>
        <Route 
            path={`${props.match.path}/:name`} 
            render={(props) => (<div><h1>{props.match.params.name}</h1></div>)} />
        </div>
    );
}

export default Category;