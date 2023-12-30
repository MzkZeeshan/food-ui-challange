import React from "react";
import FooterPrice from "../../components/FooterPrice";
import Header from "../../components/Header";
import Deliveryboy from '../../Assets/images/deliveryboy.png'
import Arrow from '../../Assets/images/arrowleft.svg'
import { Link } from "react-router-dom";

function OrderComp() {
  return (
    <div className="flex flex-col justify-between items-center gap-3 px-4 pt-3 pb-1 ">
      <div className="w-full">
        <Header first={<img alt="#" src={Arrow} />}/>
      </div>
      <div className="font-semibold text-[25px] text-center ">"Congratulations! Your Order Has Been Placed!"</div>
      <div className="py-12">
        <img alt="#" src={Deliveryboy} />
      </div>
      <div className="text-[#A1A1A1] text-[16px] text-center ">
        Thank you for choosing our services! Your order has been successfully
        placed and is now being processed. We appreciate your trust in us and
        look forward to serving you.
      </div>
      <div className="w-full">
      <Link to={"/"} >
        <FooterPrice btnTitle={"Return Home"} />
        </Link>
      </div>
    </div>
  );
}

export default OrderComp;
