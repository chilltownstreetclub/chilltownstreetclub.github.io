import { Box } from "@primer/react";
import Coverphoto from "../assets/images/Coverphoto.jpg";
import Chilltowncut from "../assets/logos/Chilltowncut.png";
import "../scss/Header.scss";

export function Header() {
  return (
    <div className="header-container">
      <img className="cover-photo" src={Coverphoto} alt="Cover" />
      <div className="announcement-bar">
          <img src={Chilltowncut} alt="Logo1" className="announcement-logo" />
        </div>
      
      <div className="wavy-text-container">
        <div className="wavy-text">
          {"CHILL RUNNING CHILL RUNNING CHILL RUNNING CHILL RUNNING ".split("").map((letter, index) => (
            <span key={index} className="wave-letter" style={{ '--i': index + 1 }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
        <div className="wavy-text" aria-hidden="true">
          {"CHILL RUNNING CHILL RUNNING CHILL RUNNING CHILL RUNNING ".split("").map((letter, index) => (
            <span key={`dup-${index}`} className="wave-letter" style={{ '--i': index + 1 }}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

