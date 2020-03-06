import React, { Component } from "react";
import {Link} from 'react-router-dom';
import logo from '../brand.png';
import {ButtonContainer} from './Button';
import styled from 'styled-components';

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container">
                <a className="navbar-brand">
                    <img className="img-fluid" src={logo} alt="Fourth Coffee" />
                </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <a className="nav-link text-dark">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}

