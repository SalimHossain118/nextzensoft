/** @format */

import React from "react";

const IntroCallInfo = () => {
  return (
    <div className="flex flex-col md:flex-row xl:flex-row gap-10 sm:justify-center items-center p-3">
      <div className="w-full md:w-3/4 xl:w-3/4 p-3">
        <p className="text-[#848484] font-abelPro sm:justify-center text-base md:text-xl leading-normal">
          Here at Brocoders, we work shoulder-to-shoulder with you in an open
          manner throughout the entire application development life-cycle. To
          cover all details and ensure the completeness of the requirements
          elicitation, we start from a first call and meetings with you.
        </p>
      </div>
      <div className="w-full md:w-1/4 xl:w-1/4 sm:justify-center sm:mx-5 flex flex-col p-3 rounded-md bg-[#EE7E2499] opacity-70">
        <div className="text-2xl md:text-2xl xl:text-2xl font-abelPro font-bold text-[#193E65] mb-1">
          Timeframe
        </div>
        <p className="font-abelPro text-base md:text-base xl:text-base text-[#5C5C5C]">
          1 hour
        </p>
        <div className="text-2xl md:text-2xl xl:text-2xl font-abelPro font-bold text-[#193E65] mb-1">
          Deliverables
        </div>
        <p className="font-abelPro font-bold text-base md:text-base xl:text-base text-[#5C5C5C]">
          NDA
        </p>
        <p className="font-abelPro text-base md:text-base xl:text-base text-[#5C5C5C]">
          Consultation
        </p>
        <div className="text-2xl md:text-2xl xl:text-2xl font-abelPro font-bold text-[#193E65] mb-1">
          Who's Involved
        </div>
        <p className="font-abelPro text-base md:text-base xl:text-base text-[#5C5C5C]">
          Technical Manager
        </p>
        <p className="font-abelPro text-base md:text-base xl:text-base text-[#5C5C5C]">
          Tech Lead
        </p>
        <p className="font-abelPro text-base md:text-base xl:text-base text-[#5C5C5C]">
          Marketing Manager
        </p>
        <p className="font-abelPro text-base md:text-base xl:text-base text-[#5C5C5C]">
          Account Manager
        </p>
        <p className="font-abelPro text-base md:text-base xl:text-base text-[#5C5C5C]">
          Stakeholder
        </p>
      </div>
    </div>
  );
};

export default IntroCallInfo;
