import React from "react";
import SpinImage from "../assets/images/SpinImage.png";
import '../scss/Spin.scss';

export function Spin() {
    return (
        <div id="spin" className='Spin-container'>
            {/* Left side - Image */}
            <div className='Spin-image-side'>
                <img
                    className="SpinImage"
                    src={SpinImage}
                    alt="Spin class">
                </img>
            </div>

            {/* Right side - Content */}
            <div className='Spin-content-side'>
                <h1>SPIN</h1>
                <p className="Spin-description">
                    Join our high-energy spin classes for an exhilarating workout!
                    All levels are welcome to pedal their way to fitness.
                </p>
                
                <div className="Event-details">
                    <p>
                        <span className="bold-text">Event:</span> Spin Class
                    </p>
                    <p>
                        <span className="bold-text">Time:</span> Every Tuesday at 7:00 PM
                    </p>
                    <p>
                        <span className="bold-text">Location:</span> Newport Swim and Fitness, Jersey City, NJ
                    </p>
                </div>

                <div className='Location-map'>
                    <iframe
                        title="Newport Swim and Fitness Spin Class Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.565731156951!2d-74.03488222387423!3d40.72757553666179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c257b9b69124f1%3A0x24f35f581d53d27a!2sNewport%20Swim%20and%20Fitness!5e0!3m2!1sen!2sus!4v1736287061219!5m2!1sen!2sus"
                        style={{ border: 0, width: '100%', height: '250px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    /> 
                </div>
            </div>
        </div>
    );
}
