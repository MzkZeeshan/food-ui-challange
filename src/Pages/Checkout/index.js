import React from "react";
import FooterPrice from "../../components/FooterPrice";
import Header from "../../components/Header";
import Arrow from '../../Assets/images/arrowleft.svg'
import payoneer from '../../Assets/images/payoneer.png'
import paypal from '../../Assets/images/paypal.png'
import master from '../../Assets/images/master.png'




import { Link } from "react-router-dom";

function CheckoutPage() {
  return (
    <div className="px-4 pt-3 pb-1 flex flex-col items-center gap-4">
      <div className="w-full">
        <Header first={<img alt="#" src={Arrow} className="w-8" />} middle="Checkout" />
      </div>
      <div className="w-full">
        <h1 className="pb-[16px] text-[25px] font-semibold ">Payment</h1>
        <div className="bg-white rounded-2xl px-3 py-2">
          <div className="flex justify-between items-center pb-3">
            <div className="flex flex-row">
              <img alt="#"  src={master} className="w-8 mr-2 ml-2"/> <p className="font-[500]">Debit/Credit card</p>
            </div>
            <div>
              <input type="radio" />
            </div>
          </div>
          <div className="flex justify-between items-center border-y py-3">
            <div className="flex flex-row">
              <img alt="#" src={paypal} className="w-8 mr-2 ml-2"/> <p className="font-[500]">PayPal</p>
            </div>
            <div>
              <input type="radio" />
            </div>
          </div>
          <div className="flex justify-between items-center pt-3">
            <div className="flex flex-row">
              <img alt="#" src={payoneer} className="w-8 mr-2 ml-2" /> <p className="font-[500]">Payoneer</p>
            </div>
            <div>
              <input type="radio" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-[25px] font-semibold pb-[16px] ">Delivery details</h1>
        <div className="text-[16px] text-[#A1A1A1]">
          <p>789 Maple Street, Los Angeles,</p>
          <p>CA 90001</p>
          <p>(888) 987-6543</p>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-[25px] font-semibold pb-[16px] ">Order details</h1>
        <div className="flex flex-row justify-between text-[16px] text-[#A1A1A1]">
          <div className="">
            <p>1x Green salad</p>
            <p>1x fresh vegetable</p>
            <p>1x Mixed salad</p>
          </div>
          <div>
            <p>3x Grilled steak</p>
            <p>1x vegan cake</p>
          </div>
        </div>
      </div>

      <Link to={"/OrderComplete "} className="w-full">
        
        <FooterPrice price={"21.21"} priceTitle="Total" btnTitle={"Pay Now"} />
      </Link>
    </div>
  );
}

export default CheckoutPage;
