/** @format */

import React from "react";
import Wave from "react-wavify";
import EcoomerceFaq from "../accordoin/EcoomerceFaq";
import WorkProcess from "../servicePageCompnents/WorkProces";
import TechnoloweUsed from "../CusSoftDevPageComponents/TechnoloweUsed";
import EcomWebMobApp from "../EcommecePageCompo/EcomWebMobApp";
import EcomServiceWeOffer from "../EcommecePageCompo/EcomServiceWeOffer";

const EcommercePage = () => {
  return (
    <section className="w-full  py-0">
      <div className="w-full h-[100vh] flex flex-col justify-end items-end bg-center bg-cover bg-eduBG  mb-10">
        <div className="w-full   relative">
          <Wave
            fill="#5050bc"
            fillOpacity=".7"
            paused={false}
            style={{ display: "flex" }}
            options={{
              height: 30,
              amplitude: 40,
              speed: 0.3,
              points: 3,
            }}
            className="h-[50vh]"
          />
          <div className="absolute top-[80px] max-sm:ml-5 max-sm:mr-5  left-0 w-full md:w-1/2 lg:w-1/2 xl:w-1/2 max-xl:w-1/3 max-lg:w-1/3 max-sm:w-full flex flex-col items-start justify-center mx-4 md:mx-10 lg:mx-10 xl:mx-20 mt-30 text-[#FFFFFF] p-3">
            <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl max-xl:text-5xl max-sm:text-[18px] sm:text-[18px] font-abelPro font-bold ">
              E-Commerce Software Development
            </h1>
            <p className="font-abelPro text-white text-base max-sm:text-[12px] sm:text-[14px] md:text-base lg:text-base sm:leading-normal leading-snug max-sm:mt-2">
              Developing an eCommerce platform isn't enough nowadays. You should
              make it top-notch to stand out from the crowd. We are here to help
              you implement innovative tech solutions, provide a smooth user
              experience, and scale your business to the max.
            </p>
          </div>
        </div>
      </div>
      {/* end of hero section component */}
      <EcomServiceWeOffer />
      <EcomWebMobApp />
      <WorkProcess />
      <TechnoloweUsed />
      <EcoomerceFaq />
    </section>
  );
};

export default EcommercePage;
