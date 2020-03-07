import React, { Component } from 'react'
import Product from "./Product";
import Title from './Title';
import axios from 'axios';
import {ProductConsumer} from '../context';
import Feature from './feature';
import './index.css';

export default class ProductList extends Component {

    state = {
        feature:[]
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/feature')
        .then(response => {
        this.setState({
            feature:response.data
        });
        })
        .catch(error => {
        console.log(error);
        });
    }


    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                    <div className="row">                                                                                          
                        <Title name="Welcome to " title="Fourth Coffee!"/>
                        <Feature feature={this.state.feature}/>
                        
                        <div id="productsWrapper" className="row">
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
