import React, { Component } from 'react'
import axios from 'axios';

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state={
        products:[]
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

    handleDetail = () => {
        console.log("hello handle detail")
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


