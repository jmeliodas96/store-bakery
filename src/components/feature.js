import React, { Component } from 'react'

export default class feature extends Component {
    render() {
        const {id, name, price, imageName, description} = this.props.feature;
        let imageNameLocation = "img/" + imageName;

        return (
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
        );
    }
}
