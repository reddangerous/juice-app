import React from 'react';
import LOGO from '../assets/LOGO.png';
import { CiFacebook } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

const ContactUs = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                {/* Form */}
                <div className="col-md-6 mb-4">
                    <h1 className="contact-title">Contact Us</h1>
                    <p>Send us a message</p>
                    <form className="contact-form">
                        <input type="text" className="form-control mb-2" style={{ borderRadius: '15px' }} placeholder="Full name" />
                        <input type="email" className="form-control mb-2" style={{ borderRadius: '15px' }} placeholder="Your email" />
                        <textarea className="form-control mb-2" style={{ borderRadius: '15px' }} placeholder="Your Message..." rows="4" />
                        <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#FF9900', borderRadius: '15px' }}>Submit</button>
                    </form>
                </div>
                {/* Sitemap and Contact Details */}
                <div className="col-md-6 mb-4 sitemap-wrapper">
                    {/* Sitemap */}
                    <div className="col-md-3 mb-4 sitemap">
                        <h1>Sitemap</h1>
                        <p>All our Pages</p>
                        <div>
                            <a style={{ color: '#473525', textDecoration: 'none' }} href="/">- Home</a><br />
                            <a style={{ color: '#473525', textDecoration: 'none' }} href="/about">- About Us</a><br />
                            <a style={{ color: '#473525', textDecoration: 'none' }} href="/services">- Services</a><br />
                            <a style={{ color: '#473525', textDecoration: 'none' }} href="/blog">- Blog</a><br />
                            <a style={{ color: '#473525', textDecoration: 'none' }} href="/contact">- Contact Us</a><br />
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="col-md-3 mb-4 contact-details">
                        <div>
                            <img src={LOGO} alt="Logo" style={{ width: '70px', height: '70px' }} />
                            <p>(08) 400 2000</p>
                            <p>xyz@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <p className="text-center mt-4">
                <CiFacebook style={{ color: '#FF9900' }} /> <FaInstagramSquare /> <FaSquareXTwitter /> <IoLogoYoutube />  © 2023 Dscode. All rights reserved.
            </p>
        </div>
    );
};

export default ContactUs;
