import React from 'react';
import { Card } from 'react-bootstrap'; // Import Bootstrap Card component
import raspberry from '../assets/raspberyy.png';
import WATERMELON from '../assets/WATERMELON.png';
import MANGO from '../assets/MANGO.png';
import Heart from '../assets/heart.svg';
import KIWI from '../assets/KIWI.png';

const Explore = () => {

    const HeartIcon = () => (
        <div
            style={{
                width: '45px',
                height: '45px',
                borderRadius: '0px 30px 0px 30px',
                backgroundColor: '#FF9900',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                top: '0',       // Position at the top
                right: '0',
            }}
        >
            <img src={Heart} alt="Heart" style={{ width: '20px', height: '20px' }} />
        </div>
    );

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="hero-text">
                        <h1 className="hero-title" style={{ color: '#473525' }}>
                            Explore best menu selections
                        </h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-4">
                            <Card className="whyus-image-card image-card" style={{ border: 'transparent' }}>
                                <Card.Img className='image' src={MANGO} alt="MANGO" />
                                <HeartIcon />
                                <Card.Body>
                                    <Card.Title>Mango Bliss Burst</Card.Title>
                                    <Card.Text>The king of fruits, Mango, is a tropical delight that is loved by all.</Card.Text>
                                    <strong>
                                        <p>
                                            <span style={{ color: '#FF3D00' }}>$</span>10.00
                                        </p>
                                    </strong>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <Card className="whyus-image-card image-card" style={{ border: 'transparent' }}>
                                <Card.Img className='image' src={KIWI} alt="KIWI" />
                                <HeartIcon />
                                <Card.Body>
                                    <Card.Title>Pure Kiwi Joy</Card.Title>
                                    <Card.Text>The king of fruits, Kiwi, is a tropical delight that has natural healing.</Card.Text>
                                    <strong>
                                        <p>
                                            <span style={{ color: '#FF3D00' }}>$</span>8.00
                                        </p>
                                    </strong>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <Card className="whyus-image-card image-card" style={{ border: 'transparent' }}>
                                <Card.Img className='image' src={raspberry} alt="Watermelon" />
                                <HeartIcon />
                                <Card.Body>
                                    <Card.Title>Berry Burst Bliss</Card.Title>
                                    <Card.Text>The king of fruits, raspberry, is one pf the sweetest delight that has natural taste.</Card.Text>
                                    <strong>
                                        <p>
                                            <span style={{ color: '#FF3D00' }}>$</span>11.00
                                        </p>
                                    </strong>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end align-items-end">
                        <a href="/menu" style={{ color: '#473525', textDecoration: 'none', display: 'flex', alignItems: 'right' }}>
                            <p>View All <span style={{ color: '#FF3D00', marginLeft: '10px' }}>&#8594;</span></p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
