import React from "react";
import FoodIcon from "../Assets/images/strawberry.png";

function CategoryCard() {
  return (
    <div className="flex justify-between w-[145px]  rounded-[10px]  items-start   bg-lime-200">
      <div className="text-black text-[15px] font-[400] pl-3 pt-1">Salad</div>
      <div className="w-[50px] h-[50px] self-end overflow-hidden">
        <img alt="#" src={FoodIcon} className="translate-x-4 translate-y-4 " />
      </div>
    </div>
  );
}

export default CategoryCard;
