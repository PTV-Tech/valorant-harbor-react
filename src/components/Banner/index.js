import React from "react";
import TextMobile from '../../images/header-mobile.png';

const Footer = () => {
  return (
    <>
      <section className="video-section pt-0">
        <div className="video-element">
          <video autoPlay muted loop>
            <source src="/video.mp4" />
          </video>
        </div>
        <div className="mobile-text">
          <img src={TextMobile} alt="" />
        </div>
        <div className="video-link">
          <div className="bg-button">
            <a href="https://www.facebook.com/VALORANTvn" target="_blank" className="link-button" rel="noopener noreferrer">
              <div className="border-button">
                <div className="button"><span>KHÁM PHÁ NGAY</span></div>
              </div>
            </a>
          </div>    
        </div>
      </section>
    </>
  );
};

export default Footer;
