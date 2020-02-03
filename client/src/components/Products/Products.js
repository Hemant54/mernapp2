import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import simulator from '../../assets/product-page/simulator-cover.png';
import brain from '../../assets/product-page/brain-cover.png';
import analyzer from '../../assets/product-page/analyzer-cover.png';
import './Product.css';

class Products extends Component {
    render() {
        return ( 
            <div>
                <Header component="product" />
                <div className="main-content">
                    <div className="products-container">
                        <div className="product simulator">
                            <img src={simulator} width="130px" alt="simulator-logo" />
                            <h3>SIMULATOR</h3>
                            <p>ENTER THE NEW WORLD</p>
                        </div>
                        <div className="product brain">
                            <img src={brain} width="160px" alt="brain-logo" />
                            <h3>BRAIN MIRROR</h3>
                            <p>INTROSPECT YOURSELF</p>
                        </div>
                        <div className="product analyzer">
                            <img src={analyzer} width="200px" alt="analyzer-logo" />
                            <h3>ANALYZER</h3>
                            <p>FEEDBACK LIKE NEVER BEFORE</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Products;