import React from "react";
import Header from "../../components/Header";
import Star from "../../Assets/images/Star.svg";
import Add from "../../Assets/images/addcircle.svg";
import Minus from "../../Assets/images/minuscirlce.svg";
import ArrowLeft from "../../Assets/images/arrowleft.svg";
import Food from "../../Assets/images/bbq.png";
import Heart from "../../Assets/images/heart.svg";
import FooterPrice from "../../components/FooterPrice";
import { Link } from "react-router-dom";

function ItemDetail() {
  return (
    <div className="pb-1">
      <div className=" py-3 rounded-b-3xl  bg-white">
        <div className="px-4">
          <Header first={<img alt="#" src={ArrowLeft} />} last={<img alt="#" src={Heart} />} />
        </div>
        <div className="px-4">
          <h1 className="font-[600] text-[25px] text-black">
            Grilled Beef Steak with Mushroom sauce
          </h1>
          <p className="font-[400] text-[18px] text-[#A1A1A1]">
            By Steak house
          </p>
          <div className="flex items-center gap-2">
            <img alt="#" src={Star} />
            <p className="font-[400] text-[16px] text-black">4.5</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex w-full  flex-col items-center">
            <img alt="#" src={Add} />
            <p>1</p>
            <img alt="#" src={Minus} />
          </div>
          <div className="overflow-hidden">
            <img alt="#" src={Food} className="h-[373px] w-[592px] translate-x-12 " />
          </div>
        </div>
        <div className="px-4">
          <h1 className="font-[600] text-[18px] text-[#000]">Description</h1>
          <p className="font-[400] text-[16px] text-[#A1A1A1]">
            Indulge in the mouthwatering delight of a perfectly grilled beef
            steak generously topped with a rich and savory mushroom sauce.
          </p>
        </div>
      </div>
      <div className="px-4">
      <Link to={"/MyBucket"}>

        <FooterPrice
          btnTitle={"Add to cart"}
          priceTitle="Price"
          price={"21.23"}
        />
      </Link>
      </div>
    </div>
  );
}

export default ItemDetail;
