import React, { Component } from 'react'
import './index.css';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';


export default class Details extends Component {
    render() {
        return (
        <ProductConsumer>
           {value => {
                const {id, name, description, price, imageName} = value.detailProduct;
                let imageNameLocation = "img/" + imageName
                return (
                <div>
                <ol id="orderProcess">
                    <li><span className="step-number">1</span>Choose Item</li>
                    <li className="current"><span className="step-number">2</span>Details &amp; Submit</li>
                    <li><span className="step-number">3</span>Receipt</li>
                </ol>
                <h1>Place Your Order: {name}</h1>
                <form method="post">
                    <div className="row">
                        <div className="col-3">
                            <img src={imageNameLocation} className="img-fluid img-thumbnail" alt="Image of product"/>
                        </div>
                        <div className="col-9">
                            <ul className="orderPageList" data-role="listview">
                                <li>
                                    <div>
                                        <p className="description">{description}</p>
                                    </div>                
                                </li>
                                <li className="email">
                                    <div className="form-group">
                                        <label>Insert your email: </label>
                                        <input className="form-control form-control-sm" />                
                                        <span></span>
                                    </div>
                                </li>
                                <li className="shipping">
                                    <div className="form-group">
                                        <label>Insert your shipping address: </label>
                                        <textarea  rows="4" className="form-control form-control-sm"></textarea>               
                                        <span></span>
                                    </div>
                                </li>
                                <li className="quantity">
                                    <div className="form-group row">
                                        <label className="col-1 col-form-label">Quantity: </label>
                                        <input className="form-control form-control-sm"/>
                                        x
                                        <span className="order-calc" id="orderPrice">${price}</span>
                                        =
                                        <span className="order-calc" id="orderTotal">$</span>
                                        <span></span>
                                    </div>
                                </li>
                            </ul>
                            <p className="actions">
                                <input type="hidden"/>
                                <button className="btn btn-danger order-button">Place Order</button>
                            </p>
                        </div>
                    </div>
                </form>
                </div>
                )
            }}
        </ProductConsumer>
        )
    }
}
