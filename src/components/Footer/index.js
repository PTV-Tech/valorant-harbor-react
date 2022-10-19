import React from "react";
import Face from '../../images/face.png';
import Youtube from '../../images/youtube.png';
import Tiktok from '../../images/tiktok.png';
import Rule from '../../images/rule.png';
import Riot from '../../images/logo-riot.png';
import VNG from '../../images/logo-vng.png';

const Footer = () => {
  return (
    <>
      <section className="section bg-footer">
        <div className="footer-top text-center">
          <div className="group social">
            <ul>
              <li>
                <a href="https://www.facebook.com/ValorantEsportsVietnam" target="_blank" rel="noopener noreferrer"><img src={Face} alt="" /></a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/VALORANTChampionsTourVietnam" target="_blank"rel="noopener noreferrer"><img src={Youtube} alt="" /></a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@valorant.vietnam" target="_blank" rel="noopener noreferrer"><img src={Tiktok} alt="" /></a>
              </li>
            </ul>
          </div>
          <a href="https://valorant.zing.vn/vi-vn/news/" target="_blank" className="text-link" rel="noopener noreferrer">XEM THÊM TIN TỨC VỀ VALORANT</a>
        </div>
        <div className="footer-bottom text-center">
          <div className="d-flex justify-content-center align-items-center">
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a href="" rel="noopener noreferrer"><img src={Riot} width="180px" height="80px" alt="" class="mr-3" /></a>
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <a href="" rel="noopener noreferrer"><img src={VNG} alt="" width="71px" height="49px" /></a>
          </div>
          <p className="mt-3 mb-3">&copy; 2022 Riot Games, Inc.</p>
          <p>Công Ty Cổ Phần VNG. Địa chỉ: Lô 03b-04-05-06-07, khu Công Nghiệp,</p>
          <p>Khu Chế Xuất Tân Thuận, phường Tân Thuạn Đông, Quận 7, Tp. Hồ Chí Minh </p>
          <div className="container">
            <ul>
              <li><a href="https://www.riotgames.com/en/privacy-notice" target="_blank" rel="noopener noreferrer">CHÍNH SÁCH BẢO MẬT</a></li>
              <li><a href="https://www.riotgames.com/en/terms-of-service" target="_blank" rel="noopener noreferrer">ĐIỀU KHOẢN SỬ DỤNG (RIOT)</a></li>
              <li><a href="https://valorant.zing.vn/dieu-khoan-su-dung.html" target="_blank" rel="noopener noreferrer">ĐIỀU KHOẢN SỬ DỤNG (VNG)</a></li>
            </ul>
          </div>
          <div className="text-center mt-4">
            <img src={Rule} alt="" width="180px" height="auto" class="border-images logo-18" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
