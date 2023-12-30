import React from "react";
import Food from "../Assets/images/vegetable.jpg";

function BucketCard() {
  return (
    <div className="flex gap-3 p-3 bg-white rounded-xl">
      <div className="">
        <img
        alt="#"
          src={Food}
          className="w-[91px] h-[91px] rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-between">
        <p className="font-[500] text-[14px] pt-2 ">Green salad with mashed potatots</p>
        <div className="flex justify-between items-center">
          <div className="text-[#A1A1A1]">Quantity 1</div>
          <div className="font-[500]">
            <span className="text-[#E74C1B]">$</span>12.4
          </div>
        </div>
      </div>
    </div>
  );
}

export default BucketCard;
