"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="hero h-[640px] xl:h-[840px] bg-hero bg-center bg-no-repeat bg-fixed lg:bg-cover xl:rounded-bl-[290px] relative z-20">
      <div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
        <div className="hero__text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-start">
          <h1 className="h1 mb-8">Let Your Home Be Unique</h1>
          <p className="mb-8">
            There are many variations of the passages of lorem Ipsum from
            available,variations of the passages.
          </p>
          <button className="btn btn-primary mx-auto xl:mx-0">
            Get free estimation
            <i className="ri-arrow-right-line text-accent"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
