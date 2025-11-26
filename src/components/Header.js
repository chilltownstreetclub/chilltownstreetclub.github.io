import { Box } from "@primer/react";
import Coverphoto from "../assets/images/Coverphoto.JPG";
import Chilltowncut from "../assets/logos/Chilltowncut.png";
import "../scss/Header.scss";

export function Header() {
  return (
    <div id="header" className="header-container">
      <img className="cover-photo" src={Coverphoto} alt="Cover" />
      <div className="announcement-bar">
          <img src={Chilltowncut} alt="Logo1" className="announcement-logo" />
        </div>
      
      {/* <div className="wavy-text-container">
        <div className="wavy-text">
          CHILL RUNNING CHILL RUNNING CHILL RUNNING CHILL RUNNING 
        </div>
        <div className="wavy-text" aria-hidden="true">
          CHILL RUNNING CHILL RUNNING CHILL RUNNING CHILL RUNNING 
        </div>
      </div> */}
    </div>
  );
}

