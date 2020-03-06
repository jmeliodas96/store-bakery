import React, { Component } from 'react'
import Product from "./Product";
import Title from './Title';
import axios from 'axios';
import {ProductConsumer} from '../context';

export default class ProductList extends Component {

    state = {
        feature:[]
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/feature')
        .then(response => {
        console.log(response.data);
        this.setState({
            feature:response.data
        });
        })
        .catch(error => {
        console.log(error);
        });
    }


    render() {
        const { id, name, description, price, imageName } = this.state.feature;
        let imageNameLocation = "img/" + imageName;

        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <div className="row">
                        <Title name="Welcome to " title="Fourth Coffee!"/>

                        <div id="featuredProduct" className="row"> 
                            <div className="col-sm-8">
                                <img alt="Featured Product" src={imageNameLocation} className="img-fluid rounded"/>
                                </div>
                                <div id="featuredProductInfo" className="col-sm-4">
                                <div id="productInfo">
                                <h2>{name}</h2>
                                <p className="price">${price}</p>
                                <p className="description">{description}</p>
                                </div>
                                <div id="callToAction">
                                <a className="btn btn-danger order-button" id={id} title={name}>Order Now</a>
                                </div>
                                </div>
                            </div>
                        <div className="row">
                            <ProductConsumer>
                                 {(value) => {
                                   return value.products.map( product => { 
                                        return <Product key={product.id} product={product}/>;
                                   })
                                 }}
                            </ProductConsumer>
                        </div>


                        
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
