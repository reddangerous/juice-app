import React from 'react';
import { Card } from 'react-bootstrap'; // Import Bootstrap Card component
import GRAPES from '../assets/GRAPES.png';
import PINEAPPLE from '../assets/PINEAPPLE.png';
import WATERMELON from '../assets/WATERMELON.png';

const WhyUS = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="hero-text">
                        <h1
                            className="hero-title"
                            style={{
                                color: '#473525',
                                fontSize: '2.5rem',
                                '@media (max-width: 768px)': {
                                    fontSize: '2rem',
                                },
                            }}
                        >
                            Why we are better than others
                        </h1>
                        <p
                            className="hero-description"
                            style={{
                                '@media (max-width: 768px)': {
                                    fontSize: '1rem',
                                },
                            }}
                        >
                            Our commitment to excellence in the realm of juices sets us apart from the competition.
                        </p>
                    </div>
                </div>
                <div className="col-md-8">
                    <div
                        className="d-flex justify-content-between"
                        style={{
                            '@media (max-width: 768px)': {
                                flexDirection: 'column',
                                alignItems: 'center',
                            },
                        }}
                    >
                        {/* Grapes Card */}
                        <Card
                            className="image-card"
                            style={{
                                width: '33%',
                                border: 'transparent',
                                '@media (max-width: 768px)': {
                                    width: '100%',
                                    marginBottom: '1rem',
                                },
                            }}
                        >
                            <Card.Img src={GRAPES} alt="Grapes" />
                        </Card>

                        {/* Pineapple Card */}
                        <Card
                            className="image-card"
                            style={{
                                width: '33%',
                                border: 'transparent',
                                '@media (max-width: 768px)': {
                                    width: '100%',
                                    marginBottom: '1rem',
                                },
                            }}
                        >
                            <Card.Img src={PINEAPPLE} alt="Pineapple" />
                        </Card>

                        {/* Watermelon Card */}
                        <Card
                            className="image-card"
                            style={{
                                width: '33%',
                                border: 'transparent',
                                '@media (max-width: 768px)': {
                                    width: '100%',
                                    marginBottom: '1rem',
                                },
                            }}
                        >
                            <Card.Img src={WATERMELON} alt="Watermelon" />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUS;
