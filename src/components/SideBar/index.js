import React, { useState } from "react";
import Download from '../../images/download.png';
import Face from '../../images/face.png';
import Youtube from '../../images/youtube.png';
import Tiktok from '../../images/tiktok.png';

const SideBar = () => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive((prev) => !prev);
    };

    return (
        <>
            <div className={`sidebar ${isActive ? "show" : ""}`}>
                 <span className="action" onClick={toggleClass}></span>
                <a href="https://valorant.zing.vn/vi-vn/download" rel="noopener noreferrer" target="_blank"><img src={Download} alt="" className="download" /></a>
                <ul>
                    <li><a href="https://www.facebook.com/VALORANTvn" rel="noopener noreferrer" target="_blank"><img src={Face} alt="" /></a></li>
                    <li><a href="https://www.tiktok.com/@valorant.vietnam" rel="noopener noreferrer" target="_blank"><img src={Tiktok} alt="" /></a></li>
                    <li><a href="https://www.youtube.com/c/VALORANTvn" rel="noopener noreferrer" target="_blank"><img src={Youtube} alt="" /></a></li>
                </ul>
            </div>
        </>
    );
    };

export default SideBar;
