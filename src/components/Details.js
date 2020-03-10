import React, { Component } from 'react'
import './index.css';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class Details extends Component {

    state = {
        OrderEmail: '',
        OrderShipping: '',
        OrderQuantity:1,
        OrderSuccess:0,
        id:'',
        name:'',
        price:''
    }

    handleChange = event => {
       console.log('event > ', event.target.id )
       
       if(event.target.id === 'email'){
        this.setState({ 
            OrderEmail: event.target.value,
        });
       }
       if(event.target.id === 'shipping'){
        this.setState({ 
            OrderShipping: event.target.value,
        });
       }
       if(event.target.id === 'quantity'){
        this.setState({ 
            OrderQuantity: parseInt(event.target.value),
        });
       }
    }


    handleSubmit = event => {
        event.preventDefault();
        
        const order = {
            OrderEmail: String(this.state.OrderEmail),
            OrderShipping: String(this.state.OrderShipping),
            OrderQuantity: this.state.OrderQuantity
        }

        console.log(" order > ", order)

        axios.post(`http://localhost:5000/api/order/create`, { order, 
        headers: {'Accept': 'application/json',
                    'Content-Type': 'application/json'}
        }).then(res => {
            console.log(res.data)
            this.setState({
                OrderSuccess:1
            })
        })

        const email = {
            id:parseInt(this.actionId.value),
            OrderQuantity:parseInt(this.state.OrderQuantity),
            Name:String(this.actionInput.value),
            OrderEmail:String(this.state.OrderEmail),
            OrderShipping:String(this.state.OrderShipping),
            Price:parseInt(this.actionPrice.value)
        }

        const jsonEmail = JSON.stringify(email)
        console.log('email > ', jsonEmail)

        axios.post(`http://localhost:5000/api/email/send`, { jsonEmail, 
        headers: {'Accept': 'application/json',
                    'Content-Type': 'application/json'}
        }).then( console.log("email sucessfull"));
        
        
    }

    render() {
        const isOrderSuccess= this.state.OrderSuccess;
        return (
        <ProductConsumer>
           {value => {
                const {id, name, description, price, imageName} = value.detailProduct;
                let imageNameLocation = "img/" + imageName
                let totalPrice = price*this.state.OrderQuantity;
                return (
                <div>
                    <ol id="orderProcess">
                        <li><span className="step-number">1</span>Choose Item</li>
                        <li className="current"><span className="step-number">2</span>Details &amp; Submit</li>
                        <li><span className="step-number">3</span>Receipt</li>
                    </ol>
                <div>{
                    isOrderSuccess === 0 ?
                    (
                    <div><h1 >Place Your Order: {name}</h1>
                    <form method="post" onSubmit={this.handleSubmit}>
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
                                            <input id="name" value={name} ref={(input) => { this.actionInput = input }} type="hidden"/>
                                            <input id="price" value={totalPrice} ref={(input) => { this.actionPrice = input }} type="hidden"/>
                                            <input id="id" value={id} ref={(input) => { this.actionId = input }} type="hidden"/>
                                            <label>Insert your email: </label>
                                            <input id="email" className="form-control form-control-sm" 
                                            onChange={this.handleChange}
                                            />                
                                            <span></span>
                                        </div>
                                    </li>
                                    <li className="shipping">
                                        <div className="form-group">
                                            <label>Insert your shipping address: </label>
                                            <textarea id="shipping" rows="4" className="form-control form-control-sm" 
                                            onChange={this.handleChange}></textarea>               
                                            <span></span>
                                        </div>
                                    </li>
                                    <li className="quantity">
                                        <div className="form-group row">
                                            <label className="col-1 col-form-label">Quantity: </label>
                                            <input id="quantity" className="col-1 form-control form-control-sm"
                                            onChange={this.handleChange}/>
                                             <p></p>X
                                            <span className="order-calc" id="orderPrice">${price}</span>
                                            =
                                            <span className="order-calc" id="orderTotal">${this.state.OrderQuantity > 0 ? price*this.state.OrderQuantity : 0}</span>
                                            <span></span>
                                        </div>
                                    </li>
                                </ul>
                                <p className="actions">
                                    <input type="hidden"/>
                                    <button type="submit" className="btn btn-danger order-button">Place Order</button>
                                </p>
                            </div>
                        </div>
                    </form></div>
                    ) : (
                    <div className="message order-success">
                        <h2>Thank you for your order!</h2>
                        <p>We are processing your order and have sent a confirmation email. Thank you for your business and enjoy!</p>
                    </div>)
                }</div>
                </div>
                )
            }
        }
    </ProductConsumer>
    )
    }
}
