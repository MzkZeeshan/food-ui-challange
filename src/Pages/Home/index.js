import React from "react";
import CategoryCard from "../../components/CategoryCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
import WavingHand from '../../Assets/images/wavingHand.svg'
import SearchIcon from '../../Assets/images/searchIcon.svg'

function Home() {
  return (
    <>
      <div className=" py-4 px-4 h-screen">
        <Header
          first={
            <>
              {" "}
              <div className="text-black text-[25px] gap-1 capitalize flex items-center font-[600] ">
                hey danyal{" "}
                <span>
                  <img alt="#" src={WavingHand} />
                </span>
              </div>
              <div className="text-black text-[13px] font-[400] ">
                it's dinner
              </div>{" "}
            </>
          }
          last={<img alt="#" src={SearchIcon} />}
        />

        <div className="my-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-black text-[16px] font-[500]">Categories</p>
            <p className="text-[#E74C1B] text-[16px] font-[500]">see all</p>
          </div>
          <div className=" overflow-x-scroll flex justify-start items-center gap-4 ">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>

        <div className="">
          <div className="flex justify-between items-center mb-2">
            <p className="text-black text-[16px] font-[500]">
              Recomeneded Items
            </p>
            <p className="text-[#E74C1B] text-[16px] font-[500]">Filters</p>
          </div>
          <div className="  flex justify-center items-center flex-wrap gap-4  ">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
