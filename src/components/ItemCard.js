import React from "react";
import HeartIcon from "../Assets/images/heart.svg";
import FoodIcon from "../Assets/images/food.jpg";
import { Link } from "react-router-dom";

function ItemCard() {
  return (

    <Link to={"/ItemDetail"} className="rounded-lg w-[150px] border-2 bg-white">
      <div><img alt="#" src={FoodIcon} className="rounded-t-lg" /></div>
      <div className="px-2 py-2">
        <p className="text-black text-[14px] font-[500]">
          Green salad with mashed potatots
        </p>
        <div className="flex items-center justify-between">
          <p className="text-black text-[14px] font-[500]">
            {" "}
            <span className="text-[#E74C1B] text-[16px] font-[500]">$</span> 122
          </p>
          <p>
            <img alt="#" src={HeartIcon} />
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
