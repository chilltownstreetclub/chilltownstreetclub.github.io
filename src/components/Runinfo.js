import React from "react";
import RunImage from "../assets/images/Runimage.JPG";
import '../scss/Runinfo.scss';

export function Runinfo() {
    return (
        <div className='Run-container'>
            {/* Left side - Image */}
            <div className='Run-image-side'>
                <img
                    className="Runimage"
                    src={RunImage}
                    alt="Group run event">
                </img>
            </div>

            {/* Right side - Content */}
            <div className='Run-content-side'>
                <h1>RUN</h1>
                <p className="Run-description">
                    All fitness levels are welcome, with walking
                    pace options and biking. Come enjoy the fun every week!
                </p>
                
                <div className="Event-details">
                    <p>
                        <span className="bold-text">Event:</span> Group Run
                    </p>
                    <p>
                        <span className="bold-text">Time:</span> Every Monday at 6:45PM
                    </p>
                    <p>
                        <span className="bold-text">Location:</span> Departed Soles Brewery in Jersey City, NJ
                    </p>
                </div>

                <div className='Location-map'>
                    <iframe
                        title="Departed Soles Brewery Location"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6047.7407473771!2d-74.040134!3d40.72087!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250ada149a34f%3A0x87c10ab6d76c935a!2sDeparted%20Soles%20Brewing%20Company!5e0!3m2!1sen!2sus!4v1736286412155!5m2!1sen!2sus"
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
