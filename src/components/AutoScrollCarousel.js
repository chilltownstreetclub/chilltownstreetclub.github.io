import React from "react";
import "../scss/AutoScrollCarousel.scss";
import CampSnap from "../assets/logos/Partners/CampSnap.png";
import MaskGroup from "../assets/logos/Partners/MaskGroup.png";
import ONRunning from "../assets/logos/Partners/ONRunning.png";
import RapidRebootBlack from "../assets/logos/Partners/RapidRebootBlack.png";
import SaltStickCircle from "../assets/logos/Partners/SaltStickCircle.png";
import Lululemon from "../assets/logos/Partners/Lululemon.png";
import NewBalance from "../assets/logos/Partners/Newbalance.png";
import LMNTWhite from "../assets/logos/Partners/LMNTWhite.png";
import StravaWhite from "../assets/logos/Partners/StravaWhite.png";
import Thefeed from "../assets/logos/Partners/Thefeed.png";
import Baystreet from "../assets/logos/Partners/Baystreet.png";
import Winningsevents from "../assets/logos/Partners/Winningevents.png";
import LiquidIV from "../assets/logos/Partners/LiquidIV.png";
export function AutoScrollCarousel() {
  // Define the logos array
  const logos = [
    CampSnap,
    ONRunning,
    MaskGroup,
    LiquidIV,
    Baystreet,
    RapidRebootBlack,
    Winningsevents,
    SaltStickCircle,
    Lululemon,
    NewBalance,
    StravaWhite,
    Thefeed,
    LMNTWhite,
  ];

  return (
    <div id="events" className="carousel-section">
      <h4 className="carousel-title">Partners</h4>
      <div className="carousel-container">
        <div className="carousel">
          {logos.map((logo, index) => (
            <div className="carousel-item" key={index}>
              <img src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
          {}
          {logos.map((logo, index) => (
            <div aria-hidden="true" className="carousel-item" key={`duplicate-${index}`}>
              <img className='logos'src={logo} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}