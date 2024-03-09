import React from "react";
import Content from "../Components/Content";
import SliderComponent from "../Components/SliderComponent";
import { Coummunity, PriceList, Speciality } from "../Components/PriceList";
export const Home = () => {
  return (
    <div>
      <Content />
      <SliderComponent data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="1000"
      data-aos-offset="0"/>
      <div className="flex flex-wrap justify-around items-center gap-2">
        {PriceList.map((item) => {
          return (
            <div
            key={item.name}
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay={item.delay}
              data-aos-easing="ease-in-out"
              className="border-2 w-[350px] border-[#5E0094] px-5 py-2 text-center flex flex-col gap-2 rounded-xl cursor-pointer hover:bg-[#5E0094] transition ease-in-out duration-500 hover:text-white"
            >
              <h1 className="font-semibold text-xl text-[#fb35c5]">
                {item.name}
              </h1>
              <p>Starting price from Rs.{item.price}</p>
            </div>
          );
        })}
      </div>
      <div className="p-3 mt-5">
        <h1 className="text-center text-6xl font-bold text-[#5e0094] max-[736px]:text-3xl" data-aos="zoom-out-up" data-aos-delay='50'
              data-aos-easing="ease-in-out" data-aos-duration="1000">
          We're Coummunity that helps business
        </h1>
        <div className="flex flex-wrap justify-around mt-5 gap-4">
          {Coummunity.map((item) => {
            return (
              <div
              key={item.title}
              data-aos="fade-right"
              data-aos-delay={item.delay}
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
                className="bg-blue-400 p-4 flex justify-center flex-col items-center gap-2 w-[400px] 
              rounded-lg cursor-pointer hover:border-orange-400 hover:border-2 hover:bg-white text-white group duration-700 ease-in-out transition-all"
              >
                <div className="bg-white rounded-full flex justify-center w-[150px] h-[150px] items-center ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[100px] h-[100px]"
                  />
                </div>
                <h1 className="font-bold text-xl mt-4 mb-2 text-red-700">
                  {item.title}
                </h1>
                <p className="text-justify group-hover:text-blue-400 ">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-3 mt-5">
        <h1 className="text-center text-6xl font-bold text-[#5e0094] max-[736px]:text-3xl" data-aos="zoom-out-up" data-aos-delay='50'
              data-aos-easing="ease-in-out" data-aos-duration="1000">
          Our Speciality
        </h1>
        <div className="flex flex-wrap justify-around mt-5 gap-4">
          {Speciality.map((item) => {
            return (
              <div
              key={item.title}
              data-aos="fade-down-right"
              data-aos-delay={item.delay}
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
                className="bg-blue-400 p-4 flex justify-center flex-col items-center gap-2 w-[400px] 
              rounded-lg cursor-pointer hover:border-orange-400 hover:border-2 hover:bg-white text-white group duration-700 ease-in-out transition-all"
              >
                <div className="bg-white rounded-full flex justify-center w-[150px] h-[150px] items-center ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[100px] h-[100px]"
                  />
                </div>
                <h1 className="font-bold text-xl mt-4 mb-2 text-red-700">
                  {item.title}
                </h1>
                <p className="text-justify group-hover:text-blue-400 ">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
};
