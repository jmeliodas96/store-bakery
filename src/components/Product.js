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
               <div className="col-sm-3 col-lg-3">
                   <a id={id} title={name}>
                       <div className="card">
                           <h3>{name}</h3>
                           <img className="product-image img-fluid img-thumbnail" src={imageNameLocation} alt="Product" />
                           <p className="align-self-center mb-0">{description}</p>
                           <div className="card-footer d-flex justify-content-between">
                                <p className="price float-left">${price}</p>
                                <Link to="/details">
                                    <a className="btn btn-sm btn-danger order-button float-right" id={id} title={ "Order " + name}>Order Now</a>
                                </Link>
                            </div>
                       </div>
                   </a>
               </div>

        )
    }
}