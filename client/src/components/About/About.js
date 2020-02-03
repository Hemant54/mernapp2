import React, { Component } from 'react';
import './About.css';
import hero from '../../assets/about-page/about-page-hero.png';
import rectangle from '../../assets/about-page/about-page-rect.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export class About extends Component {
    render() {
        return (
            <div className="about-container">
                <Header component="about" />
                <div className="content">
                    <div className="hero-text">
                        <h1>Innovations like</h1>
                        <h1>Never before</h1>
                    </div>
                    <div className="hero-images">
                        <img src={hero} className="hero-image" alt="hero-img-1" />
                        <img src={rectangle} className="rectangle-image" alt="hero-img-2" />
                    </div>
                </div>
                <div className="subscribe-container">
                    <h3 className="form-title">Get the weekly blogs and updates directly in your inbox</h3>
                        <div className="subscribe-form">
                            <form>
                                <input className="form-name" type="text" placeholder="Name" />
                                <input className="form-number" type="tel" placeholder="Mobile Number" />
                                <input className="form-email" type="email" placeholder="Email" /> 
                            </form>
                        </div><br />
                        <button className="subscribe-btn">Subscribe</button>
                    </div>
                    <Footer />
            </div>
        )
    }
}

export default About
