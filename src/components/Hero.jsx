import React from 'react';
import HeroImg from '../assets/Hero.png';

const Hero = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="hero-text">
                        <h1
                            className="hero-title"
                            style={{
                                color: '#473525',
                                fontSize: '3rem',
                                '@media (max-width: 768px)': {
                                    fontSize: '2rem',
                                },
                            }}
                        >
                            Revitalize Your Routine, Fresh, Fruity, Fantastic!
                        </h1>
                        <p className="hero-description">
                            Savor the Symphony of Flavors, with Nature's Sweetness & deliciousness.
                            Get the best variety of juices here!
                        </p>
                        <div className="hero-buttons">
                            <button
                                className="btn"
                                style={{
                                    backgroundColor: '#473525',
                                    color: '#ffffff',
                                    borderRadius: '10px',
                                    marginRight: '10px',
                                    padding: '0.5rem 1rem',
                                    '@media (max-width: 768px)': {
                                        padding: '0.25rem 0.5rem',
                                    },
                                }}
                            >
                                View Menu
                            </button>
                            <button
                                className="btn"
                                style={{
                                    border: '1px solid #473525',
                                    borderRadius: '10px',
                                    padding: '0.5rem 1rem',
                                    '@media (max-width: 768px)': {
                                        padding: '0.25rem 0.5rem',
                                    },
                                }}
                            >
                                Discount
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="hero-image" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
                        <img
                            src={HeroImg}
                            alt="Hero"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
