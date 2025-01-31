"use client";

import React from "react";
import Image from "next/image";
import Testimonial_01 from "/public/images/testimonial/01.png";
import Testimonial_02 from "/public/images/testimonial/02.png";
import Testimonial_03 from "/public/images/testimonial/03.png";
import Testimonial_04 from "/public/images/testimonial/04.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section className="testimonial mt-[80px] xl:mt-[200px] relative z-20 xl:mx-[11%]">
      <div className="testimonial__bg container mx-auto bg-accent-secondary rounded-[70px] px-6 ">
        <div className="flex flex-col items-center pt-[88px] pb-[110px] ">
          <h2 className="testimonial__title h2 mb-9 text-center ">
            What clients say
          </h2>
          <div className="w-full">
            <div className="testimonial__slider swiper h-[400px] ">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1480: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                {/* slide 01 */}
                <SwiperSlide>
                  <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto ">
                    <div className="flex gap-4 mb-6 ">
                      <Image src={Testimonial_01} alt="testimonial_01" />
                      <div>
                        <h3 className="h3">Nattasha Mith</h3>
                        <div>Greenville, USA</div>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the typesetting
                      industry. Ipsum has been.
                    </p>
                  </div>
                </SwiperSlide>
                {/* slide 02 */}
                <SwiperSlide>
                  <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto ">
                    <div className="flex gap-4 mb-6 ">
                      <Image src={Testimonial_02} alt="testimonial_02" />
                      <div>
                        <h3 className="h3">Jessica White</h3>
                        <div>Oak Ridge, USA</div>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the typesetting
                      industry. Ipsum has been.
                    </p>
                  </div>
                </SwiperSlide>
                {/* slide 03 */}
                <SwiperSlide>
                  <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto ">
                    <div className="flex gap-4 mb-6 ">
                      <Image src={Testimonial_03} alt="testimonial_03" />
                      <div>
                        <h3 className="h3">Mike Davis</h3>
                        <div>Berlin, Germany</div>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the typesetting
                      industry. Ipsum has been.
                    </p>
                  </div>
                </SwiperSlide>
                {/* slide 04 */}
                <SwiperSlide>
                  <div className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto ">
                    <div className="flex gap-4 mb-6 ">
                      <Image src={Testimonial_04} alt="testimonial_04" />
                      <div>
                        <h3 className="h3">Olivia Wilson</h3>
                        <div>Blue Ridge, France</div>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the typesetting
                      industry. Ipsum has been.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
