import Strava from "../assets/logos/Strava.png";
import Mail from "../assets/logos/Mail.png";
import Instagram from "../assets/logos/Instagram.png";
import '../scss/Footer.scss';

export function Footer () {

return (
    <div className="footer-container">
    <div>
        <div className="social-media-container">
        <a href="https://www.instagram.com/chilltownstreetclub/?hl=en" target="_blank" rel="noopener noreferrer">
            <img className="social-media-logo" src={Instagram} alt="Instagram Logo"/>
        </a>

        <a href="https://www.strava.com/clubs/1101849" target="_blank" rel="noopener noreferrer">
            <img className="social-media-logo" src={Strava} alt="Strava Logo"/>
        </a>

        <a href="mailto:chilltownstreetclub@gmail.com" target="_blank" rel="noopener noreferrer">
            <img className="social-media-logo" src={Mail} alt="Email Icon"/>
        </a>
        </div>
        <div>
        <a className="code-of-conduct" href="https://drive.google.com/file/d/1S0yarD4VzoqjqAvYp-KqdyAl892358Wb/view?pli=1" target="_blank" rel="noopener noreferrer">
            <h4>CHILLTOWN STREET CLUB CODE OF CONDUCT</h4>
        </a>
        </div>
        <div></div>
    </div>

    <div className="donation-form-container">
        <a 
        className="donation-link" 
        href="https://www.zeffy.com/embed/donation-form/f0e22e47-7252-427f-8b56-e5321c8cebe1" 
        target="_blank"
        rel="noopener noreferrer"
        >
        <h4>DONATE NOW</h4>
        </a>
    </div>
    </div>
);
}
