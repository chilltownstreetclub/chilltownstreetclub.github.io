import { Box } from "@primer/react";
import Aboutcover from "../assets/images/Aboutcover.png";
import '../scss/AboutMe.scss';

export function AboutMe() {
  return (
    <div id="about" className='about-me-container'>
      <img 
        className="cover-photo" 
        src={Aboutcover} 
        alt="About cover"
      />
      
      <div className="overlay">
            <div className="AboutMe-text">
            <h1>ABOUT</h1> 
                <p>
                Established in 2023, we bring together running, biking, meditation, 
                and yoga in Jersey City to inspire movement, build community, and support 
                local businesses. Join us for an exciting journey of connection and fitness.
                </p>
      </div>
    </div>
    </div>
  );
}


