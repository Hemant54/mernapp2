import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import logo from '../../assets/about-page/innovative-ai-logo.png';

export default class Header extends Component {
    
    render() {
        const {component} = this.props;
        return (
            <div>
                <header className="header-container">
                    <div className="logo-box">
                        <img src={logo} width="50px" alt="logo" />
                    </div>
                    <ul>
                        <li className={component === 'about' ? "about-nav" : null}><Link to="/">About</Link></li>
                        <li className={component === 'product' ? "about-nav" : null}><Link to="/products">Products</Link></li>
                        <li className={component === 'store' ? "about-nav" : null}><Link to="/store">Store</Link></li>
                        <li className={component === 'founders' ? "about-nav" : null}><Link to="/founders">Meet the Founders</Link></li>
                        <li className={component === 'blogs' ? "about-nav" : null}><Link to="/blogs">Blogs</Link></li>
                        <li className={component === 'faqs' ? "about-nav" : null}><Link to="/faqs">FAQs</Link></li>
                        <li className={component === 'partners' ? "about-nav" : null}><Link to="/partners">Partners</Link></li>
                    </ul>
                    <div className="btn">
                        Login
                    </div>
                </header>
            </div>
        )
    }
}
