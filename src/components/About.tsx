"use client";

import React from "react";
import Image from "next/image";
import AboutImage from "/public/images/about/img.png";

const About = () => {
  return (
    <section className="about mt-[80px] xl:mt-[200px] relative z-20 xl:mx-[11%]">
      <div className="conatiner mx-auto xl:px-0">
        <div className="flex flex-col xl:flex-row text-center xl:text-left justify-between items-center gap-8 xl:gap-[74px]">
          <div className="about__text flex-1 order-2 xl:order-none max-w-xl xl:max-w-[410px] flex flex-col items-center xl:items-start gap-8">
            <h2 className="h2">
              We Create The Art Of Stylish Living Stylishly
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <div className="flex items-center justify-center xl:justify-start gap-4">
              <div className="bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center">
                <i className="ri-phone-fill text-accent text-4xl "></i>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold ">+213 670 209 387</div>
                <div>Call Us Anytime</div>
              </div>
            </div>
            <button className="btn btn-primary">
              Get free estimation
              <i className="ri-arrow-right-line text-accent"></i>
            </button>
          </div>
          <div className="about__img order-1 xl:order-none max-x-[453px] mx-auto xl:max-w-none xl:mx-0">
            <Image src={AboutImage} alt="about image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
