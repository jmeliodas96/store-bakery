import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

export default class Product extends Component {
    render() {
        const {id, name, description, price, imageName} = this.props.product;
        let imageNameLocation = "img/" + imageName
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
                
                <div className="card">
                    <div className="img-container p-5" onClick={console.log("you clicked me")}>
                        <Link to="/details">
                            <img src={imageNameLocation} alt="product" className="card-image"></img>
                        </Link>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.nav`

`;