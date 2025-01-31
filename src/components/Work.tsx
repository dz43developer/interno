import React from "react";
import Image from "next/image";
import Work_01 from "/public/images/work/01.png";
import Work_02 from "/public/images/work/02.png";
import Work_03 from "/public/images/work/03.png";
import Work_04 from "/public/images/work/04.png";

const Work = () => {
  return (
    <section className="work mt-[80px] xl:mt-[200px] relative z-20  xl:mx-[10%]">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <h2 className="work__title h2 mb-4">Follow Our Projects</h2>
          <p className="work__subtitle max-w-3xl mx-auto ">
            Subtitle: It is a long established fact that a reader will be
            distracted by the of readable content of page lookings at its
            layouts points.
          </p>
        </div>
        <div className="work__grid grid grid-cols-1 xl:grid-cols-2 gap-x-[104px] gap-y-[56px]">
          <div className="w-full max-w-[548px] h-full mx-auto">
            <Image className="mb-6" src={Work_01} alt="work_01" />
            <div className="flex justify-between items-center w-full ">
              <div>
                <h3 className="h3">Modern Kitchen</h3>
                <p className="">Decor/Architecture</p>
              </div>
              <button className="bg-accent-secondary w-[70px] h-[70px] rounded-full hover:bg-accent/20 ">
                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1 "></i>
              </button>
            </div>
          </div>
          <div className="w-full max-w-[548px] h-full mx-auto">
            <Image className="mb-6" src={Work_02} alt="work_02" />
            <div className="flex justify-between items-center w-full ">
              <div>
                <h3 className="h3">Modern Kitchen</h3>
                <p className="">Decor/Architecture</p>
              </div>
              <button className="bg-accent-secondary w-[70px] h-[70px] rounded-full hover:bg-accent/20 ">
                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1 "></i>
              </button>
            </div>
          </div>
          <div className="w-full max-w-[548px] h-full mx-auto">
            <Image className="mb-6" src={Work_03} alt="work_03" />
            <div className="flex justify-between items-center w-full ">
              <div>
                <h3 className="h3">Modern Kitchen</h3>
                <p className="">Decor/Architecture</p>
              </div>
              <button className="bg-accent-secondary w-[70px] h-[70px] rounded-full hover:bg-accent/20 ">
                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1 "></i>
              </button>
            </div>
          </div>
          <div className="w-full max-w-[548px] h-full mx-auto">
            <Image className="mb-6" src={Work_04} alt="work_04" />
            <div className="flex justify-between items-center w-full ">
              <div>
                <h3 className="h3">Modern Kitchen</h3>
                <p className="">Decor/Architecture</p>
              </div>
              <button className="bg-accent-secondary w-[70px] h-[70px] rounded-full hover:bg-accent/20 ">
                <i className="ri-arrow-right-s-line text-3xl text-primary pl-1 "></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
