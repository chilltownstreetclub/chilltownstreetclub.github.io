import React from "react";
import yogaphoto3 from '../assets/images/yogaphoto3.jpg';
import '../scss/Yogainfo.scss';

export function Yogainfo() {
    return (
        <div className='Yoga-container'>
            {/* Left side - Content */}
            <div className='Yoga-content-side'>
                <h1>YOGA</h1>
                <p className="Yoga-description">
                    Ease into your weekend every Friday
                    at 8:00 AM with a calming yoga session. Ideal for
                    unwinding after a busy week. All levels welcome!
                </p>
                
                <div className="Event-details">
                    <p>
                        <span className="bold-text">Event:</span> Yoga Meetup
                    </p>
                    <p>
                        <span className="bold-text">Time:</span> Every Friday at 8:00 AM
                    </p>
                    <p>
                        <span className="bold-text">Location:</span> Dixon Mills in Jersey City, NJ
                    </p>
                </div>

                <div className='Location-map'>
                    <iframe
                        title="Dixon Mills Yoga Location"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6047.696409036165!2d-74.050008!3d40.721358!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b4482bb7a5%3A0x3e630e789958ae0d!2s341%20Monmouth%20St%2C%20Jersey%20City%2C%20NJ%2007302!5e0!3m2!1sen!2sus!4v1736286695815!5m2!1sen!2sus"
                        style={{ border: 0, width: '100%', height: '250px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

            {/* Right side - Image */}
            <div className='Yoga-image-side'>
                <img
                    className="yogaphoto"
                    src={yogaphoto3}
                    alt="Yoga session">
                </img>
            </div>
        </div>
    );
}
