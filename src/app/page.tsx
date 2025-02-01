"use client";

// import React, { useEffect } from "react";
import React from "react";

// import dynamic from "next/dynamic";
// const ScrollReveal = dynamic(()=>import("scrollreveal"),{ssr:false});
// import ScrollReveal from "scrollreveal";

export default function Home() {
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const sr = ScrollReveal({
  //       origin: "bottom",
  //       distance: "60px",
  //       duration: 3000,
  //       delay: 600,
  //     });

  //     sr.reveal(".hero__text", { origin: "top" });
  //     sr.reveal(".steps__step", { distance: "100px", interval: 100 });
  //     sr.reveal(".about__text", { origin: "left" });
  //     sr.reveal(".about__img", { origin: "right", delay: 800 });
  //     sr.reveal(".testimonial__bg", { delay: 800 });
  //     sr.reveal(".testimonial__slider", { delay: 1000 });
  //     sr.reveal(".testimonial__title");
  //     sr.reveal(".brands__img", {
  //       delay: 600,
  //       distance: "100px",
  //       interval: 100,
  //     });
  //     sr.reveal(".work__title");
  //     sr.reveal(".work__subtitle", { delay: 800 });
  //     sr.reveal(".work__grid", { delay: 1000 });
  //     sr.reveal(".stats");
  //     sr.reveal(".stats__item", { distance: "100px", interval: 100 });
  //     sr.reveal(".news__title");
  //     sr.reveal(".news__subtitle", { delay: 800 });
  //     sr.reveal(".news__grid", { delay: 1000 });
  //     sr.reveal(".news__item", { distance: "100px", interval: 100 });
  //     sr.reveal(".contact__container");
  //     sr.reveal(".contact__text", { delay: 800 });
  //     sr.reveal(".footer__item", { distance: "100px", interval: 100 });
  //     sr.reveal(".footer__copyright");
  //   }
  // }, []);
  return (
    <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10"></div>
  );
}
