/** @format */

import React from "react";
import "./HomePage.css";
import Wave from "react-wavify";

const HomePageHero = () => {
  return (
    <div>
      <div className="landingpage">
        <div className="hero-section">
          <div className="hero-main">
            <div className="hero-text mt-10">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                NextGen Soft - Your trusted Software Development Partner
              </h1>
              <p className="text-sm max-sm:text-[12px] md:text-base lg:text-md xl:text-xl  hero-text-p font-abelPro mb-0 ">
                We're here to accompany you all along the road from an MVP to
                asuccssfull product stage or wherever your business goals and
                ambtions will take you. hi.
              </p>
            </div>
            <div className="wave">
              <Wave
                className="anim-wave h-[50vh]"
                fill="#EE7E24"
                fillOpacity=".7"
                paused={false}
                style={{ display: "flex" }}
                options={{
                  height: 30,
                  amplitude: 40,
                  speed: 0.2,
                  points: 3,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
