import React from "react";

function FooterPrice({ priceTitle, price, btnTitle, }) {
  return (
    <div>
      <div className={`flex ${price ? 'justify-between':'justify-center'} items-center mt-5`}>
        {price && (
        <div>
          <p className="font-[400] text-[18px] text-[#434141]">{priceTitle}</p>
          <p className="font-[400] text-[30px] text-[#000]">
            {price}{" "}
            <span className="font-[400] text-[30px] text-[#E74C1B]">
              $
            </span>
          </p>
        </div>

        )}
        <div className="bg-[#E74C1B] rounded-[50px] px-5 py-2 text-[25px] text-[#fff]">
          {btnTitle}
        </div>
      </div>
      <div className="h-2 mt-3 bg-black w-[10rem] rounded-full mx-auto"></div>
    </div>
  );
}

export default FooterPrice;
