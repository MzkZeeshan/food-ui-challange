import React from "react";
import BucketCard from "../../components/BucketCard";
import Header from "../../components/Header";
import LeftArrow from '../../Assets/images/arrowleft.svg'
import FooterPrice from "../../components/FooterPrice";
import { Link } from "react-router-dom";

function MyBucket() {
  return (
    <div className="px-4 pb-1 pt-3">
      <Header first={<img alt="#" src={LeftArrow} width={30} />} middle="Bucket" />
      <div className="flex flex-col gap-3">
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
        <BucketCard />
      </div>
      <Link to={"/CheckoutPage"} ><FooterPrice price="22.22" priceTitle="Total" btnTitle="Checkout" /></Link>
    </div>
  );
}

export default MyBucket;
