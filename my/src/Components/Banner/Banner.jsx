import React, { useState, useEffect } from 'react';
import './Banner.css'; // Import your CSS file

const DiscountBanner = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Countdown logic
    useEffect(() => {
        const countdownDate = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                clearInterval(interval);
            } else {
                setTimeLeft({
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="discount-banner">
            <div className="banner-content">
                <div className="banner-text">
                    <h1>Exclusive Offer: Flat 50% Off on Dresses!</h1>
                    <p>Hurry up! Limited time offer</p>
                    <div className="countdown">
                        <span>{timeLeft.hours}h</span> : 
                        <span>{timeLeft.minutes}m</span> : 
                        <span>{timeLeft.seconds}s</span>
                    </div>
                </div>
                <div className="banner-image">
                    <img src="/path-to-your-image/dress.jpg" alt="Dress" />
                </div>
            </div>
        </div>
    );
};

export default DiscountBanner;
