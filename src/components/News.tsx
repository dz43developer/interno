import React from "react";
import Image from "next/image";
import News_01 from "/public/images/news/01.png";
import News_02 from "/public/images/news/02.png";
import News_03 from "/public/images/news/03.png";

const News = () => {
  return (
    <section
      id="news"
      className="news mt-[80px] xl:mt-[150px] relative z-20  xl:mx-[11%]"
    >
      <div className="container mx-auto px-0">
        <div className="max-w-[810px] mx-auto text-center mb-[52px] ">
          <h2 className="news__title h2 mb-3">Articles & News</h2>
          <p className="news__subtitle">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
        </div>
        <div className="news__grid grid grid-cols-1 xl:grid-cols-3 gap-[27px] ">
          <div className="news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0">
            <Image className="news__img" src={News_01} alt="news_01" />
            <div className="flex flex-col gap-[30px]">
              <h3 className="h3">
                Let’s Get Solution For Building Construction Work
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-base">22 June,2024</p>
                <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:bg-white transition-all">
                  <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0 ">
            <Image className="news__img" src={News_02} alt="news_02" />
            <div className="flex flex-col gap-[30px]">
              <h3 className="h3">
                Low Cost Latest Invented Interior Designing Ideas.
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-base">24 June,2024</p>
                <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:bg-white transition-all">
                  <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="news__item w-full max-w-[382px] h-[520px] border border-primary/20 rounded-[62px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0 ">
            <Image className="news__img" src={News_03} alt="news_03" />
            <div className="flex flex-col gap-[30px]">
              <h3 className="h3">
                Best For Any Office & Business Interior Solution
              </h3>
              <div className="flex items-center justify-between">
                <p className="text-base">28 June,2024</p>
                <button className="bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:bg-white transition-all">
                  <i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
