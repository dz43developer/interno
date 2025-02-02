"use client";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then((module) => {
        const ScrollReveal = module.default;
        const sr = ScrollReveal({
          origin: "bottom",
          distance: "60px",
          duration: 1000,
          delay: 400,
          reset: true,
        });
        sr.reveal(".hero__text", { origin: "top" });
        sr.reveal(".steps__step", { distance: "100px", interval: 100 });
        sr.reveal(".about__text", { origin: "left" });
        sr.reveal(".about__img", { origin: "right", delay: 600 });
        sr.reveal(".testimonial__bg", { delay: 600 });
        sr.reveal(".testimonial__slider", { delay: 800 });
        sr.reveal(".testimonial__title");
        sr.reveal(".brands__img", {
          delay: 600,
          distance: "100px",
          interval: 100,
        });
        sr.reveal(".work__title");
        sr.reveal(".work__subtitle", { delay: 600 });
        sr.reveal(".work__grid", { delay: 800 });
        sr.reveal(".stats");
        sr.reveal(".stats__item", { distance: "100px", interval: 100 });
        sr.reveal(".news__title");
        sr.reveal(".news__subtitle", { delay: 600 });
        sr.reveal(".news__grid", { delay: 800 });
        sr.reveal(".news__item", { distance: "100px", interval: 100 });
        sr.reveal(".contact__container");
        sr.reveal(".contact__text", { delay: 600 });
        sr.reveal(".footer__item", { distance: "100px", interval: 100 });
        sr.reveal(".footer__copyright");
      });
    }
  }, []);
  return (
    <div className="xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10"></div>
  );
}
