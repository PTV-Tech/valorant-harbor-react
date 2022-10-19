import React from "react";
import Logo from '../../images/logo-v.png';
import LogoWhite from '../../images/logo-v-white.png';
import LogoFull from '../../images/logo-full.png';
import LogoFullWhite from '../../images/logo-full-white.png';

const Play = () => {
  return (
    <>
      <section className="section bg-play">
        <div className="block-play">
          <div className="group-text">
            <img src={Logo} alt="" className="small-logo d-none d-sm-none d-lg-block" />
            <img src={LogoWhite} alt="" className="small-logo d-block d-sm-block d-lg-none" />
            <h6>HÃY LÀ NGƯỜI ĐẦU TIÊN NẮM GIỮ</h6>
            <h6>SỨC MẠNH NHẤN CHÌM CẢ ĐẤU TRƯỜNG TẠI</h6>
            <img src={LogoFull} alt="" className="full-logo d-none d-sm-none d-lg-block" />
            <img src={LogoFullWhite} alt="" className="full-logo d-block d-sm-block d-lg-none" />
            <p className="text-play">NGAY HÔM NAY</p>
          </div>  
          <div className="bg-button">
            <a href="https://valorant.zing.vn/vi-vn/download/" target="_blank" className="link-button" rel="noopener noreferrer">
              <div className="border-button">
                <div className="button"><span>CHIẾN NGAY</span></div>
              </div>
            </a>
          </div>  
        </div>  
      </section>
    </>
  );
};

export default Play;
