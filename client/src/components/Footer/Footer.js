import React, { Component } from 'react';
import './Footer.css';
import facebook from '../../assets/about-page/facebook.png';
import instagram from '../../assets/about-page/instagram.png';
import linkedin from '../../assets/about-page/linkedin.png';
import twitter from '../../assets/about-page/twitter.png';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="footer-text">innovative <span>labs</span></div>
                    <div className="footer-icons">
                        <img src={facebook} alt="facebook-icon" />
                        <img src={instagram} alt="instagram-icon" />
                        <img src={linkedin} alt="linkedin-icon" />
                        <img src={twitter} alt="twitter-icon" />
                    </div>
                </footer>
                <hr className="footer-break" />
                <p className="copy-text">Copyright @ Innovative Labs 2020, All Rights Reserved</p>
            </div>
        )
    }
}
