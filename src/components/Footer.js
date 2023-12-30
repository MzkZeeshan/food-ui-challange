import React from "react";
import HeartIcon from "../Assets/images/heart2x.svg";
import ProfileIcon from "../Assets/images/profilecircle.svg";
import DiagramIcon from "../Assets/images/diagram.svg";
import HomeIcon from "../Assets/images/home.svg";
import BagIcon from "../Assets/images/bag2.svg";

function Footer() {
  return (
    <div className="fixed bottom-0 w-full px-4 pt-3 bg-white">
      <div className="flex justify-between items-center mb-2">
        <div>
          <img alt="#" src={HomeIcon} />
        </div>
        <div>
          <img alt="#" src={HeartIcon} />
        </div>
        <div className="rounded-full p-[10px] bg-black text-white">
          <img alt="#" src={BagIcon} />
        </div>
        <div>
          <img alt="#" src={DiagramIcon} />
        </div>
        <div>
          <img alt="#" src={ProfileIcon} />
        </div>
      </div>
      <div className="h-2 bg-black w-[10rem] rounded mx-auto"></div>
    </div>
  );
}

export default Footer;
