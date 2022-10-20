import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel} from "swiper";

import Banner from "./components/Banner";
import Profile from "./components/Profile";
import News from "./components/News";
import Play from "./components/Play";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

import "swiper/css/pagination";
import "swiper/css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        preventClicks={true}
        preventClicksPropagation={true}
        modules={[Mousewheel]}
        freeMode
      >
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <Profile />
        </SwiperSlide> 
        <SwiperSlide>
          <News />
        </SwiperSlide>
        <SwiperSlide>
          <Play />
        </SwiperSlide>
        <SwiperSlide>
          <Footer />
        </SwiperSlide>
      </Swiper>
      <SideBar/>
    </>
  );
}

export default App;
