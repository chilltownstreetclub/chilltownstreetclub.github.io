import '../scss/Slideshow.scss';
import React from "react";
import slideshow1 from "../assets/images/slideshow1.png";
import slideshow2 from "../assets/images/slideshow2.png";
import slideshow3 from "../assets/images/slideshow3.png";
import slideshow4 from "../assets/images/slideshow4.png";
import slideshow5 from "../assets/images/slideshow5.png";
import slideshow6 from "../assets/images/slideshow6.png";
import slideshow7 from "../assets/images/slideshow7.png";
import slideshow8 from "../assets/images/slideshow8.png";
import yogaphoto from "../assets/images/yogaphoto.jpg";
import yogaphoto2 from "../assets/images/yogaphoto2.jpg";

export function Slideshow() {
  const photos = [
    { src: slideshow1, alt: "Chilltown Street Club Event 1" },
    { src: slideshow2, alt: "Chilltown Street Club Event 2" },
    { src: slideshow3, alt: "Chilltown Street Club Event 3" },
    { src: slideshow4, alt: "Chilltown Street Club Event 4" },
    { src: slideshow5, alt: "Chilltown Street Club Event 5" },
    { src: slideshow6, alt: "Chilltown Street Club Event 6" },
    { src: slideshow7, alt: "Chilltown Street Club Event 7" },
    { src: slideshow8, alt: "Chilltown Street Club Event 8" },
    { src: yogaphoto, alt: "Yoga Session" },
    { src: yogaphoto2, alt: "Yoga Session 2" },
  ];

  return (
    <section id="gallery" className="Slideshow-row">
      <div className="gallery-container">
        <h2 className="gallery-title">GALLERY</h2>
        <p className="gallery-subtitle">
          Follow us on{" "}
          <a 
            href="https://www.instagram.com/chilltownstreetclub/?hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-link"
          >
            @chilltownstreetclub
          </a>
        </p>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <div key={index} className="photo-item">
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  
{/*     
            <div className="Slideshow-container">
                <div className="photos">
                    <img className="photo" src={slideshow1} alt="Slideshow 1" />
                </div>
                <div className="photos">
                    <img className="photo" src={slideshow3} alt="Slideshow 3" />
                </div>
                <div className= "photos">
                    <img className="photo" src={slideshow8} alt="=Slideshow 8"/>
                </div>
            </div>

            
            <div className="Slideshow-container">
                <div className="photos">
                    <img className="photo" src={yogaphoto2} alt="yogaphoto2" />
                </div>
                <div className="photos">
                    <img className="photo" src={slideshow7} alt="Slideshow 7" />
                </div>
                <div className="photos">
                    <img className="photo" src={slideshow6} alt="Slideshow 6">
                    </img>
                </div>
            </div>

            
            <div className="Slideshow-container">
                <div className="photos">
                    <img className="photo" src={slideshow4} alt="Slideshow 4" />
                </div>
                <div className="photos">
                    <img className="photo" src={slideshow5} alt="Slideshow 5" />
                </div>
                <div className="photos" >
                    <img className="photo" style={{height: '49.4vw'}} src={yogaphoto} alt="yogaphoto" />
                </div>
            </div> */}

