import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import './index.css';


export default class Product extends Component {
    render() {
        const {id, name, description, price, imageName} = this.props.product;
        let imageNameLocation = "img/" + imageName
        return (
            /** 
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">       
                <div className="card">
                    <div className="img-container p-5" onClick={console.log("you clicked me")}>
                        <Link to="/details">
                            <img src={imageNameLocation} alt="product" className="card-image"></img>
                        </Link>
                    </div>
                </div>
            </ProductWrapper>
            **/
           <div id="productsWrapper" className="row">
               <div className="col-sm-3">
                   <a id={id} title={name}>
                       <div className="productInfo">
                           <h3>{name}</h3>
                           <img className="product-image img-fluid img-thumbnail" src={imageNameLocation} alt="Product" />
                           <p className="description">{description}</p>
                       </div>
                   </a>
                   <div className="action">
                       <p className="price float-left">${price}</p>
                       <a className="btn btn-sm btn-danger order-button float-right" id={id} title={name}>Order Now</a>
                   </div>
               </div>
           </div>

        )
    }
}


/*
const ProductWrapper = styled.nav`
`;
*/