import React, { Component } from 'react'
import axios from 'axios';

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state={
        products:[],
        detailProduct:[]
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/api/product')
        .then(response => {
        console.log(response.data);
        this.setState({
            products:response.data
        });
        })
        .catch(error => {
        console.log(error);
        });
    }

    getItem = id => {

        const product = this.state.products.find(item => item.id == id)
        return product;
    }

    handleDetail = (id) => {
        console.log("id >", id)
        const productDetail = this.getItem(id);
        this.setState(() => {
            return {detailProduct:productDetail}
        });
        
    }


    addToCart = () => {
        console.log("hello hanlde cart")
    }
    
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};


