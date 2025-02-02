"use client";

import React from "react";
import Image from "next/image";
import Brand_01 from "/public/images/brands/01.svg";
import Brand_02 from "/public/images/brands/02.svg";
import Brand_03 from "/public/images/brands/03.svg";
import Brand_04 from "/public/images/brands/04.svg";
import Brand_05 from "/public/images/brands/05.svg";

const Brands = () => {
  return (
    <section className="brands mt-[80px] xl:mt-[200px] relative z-20  xl:mx-[11%]">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-12 ">
          <Image className="brands__img" src={Brand_01} alt="brand_01" />
          <Image className="brands__img" src={Brand_02} alt="brand_02" />
          <Image className="brands__img" src={Brand_03} alt="brand_03" />
          <Image className="brands__img" src={Brand_04} alt="brand_04" />
          <Image className="brands__img" src={Brand_05} alt="brand_05" />
        </div>
      </div>
    </section>
  );
};

export default Brands;
