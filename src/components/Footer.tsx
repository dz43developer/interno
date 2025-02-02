"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import Logo from "/public/images/logo.svg";

const Footer = () => {
  return (
    <section className="footer mt-[80px] xl:mt-[150px] relative z-20  xl:mx-[10%]">
      <div className="footer__container container mx-auto px-0">
        <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px]">
          <div className="footer__item w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left">
            <Link
              href="/"
              className="flex justify-center xl:justify-start mb-8 "
            >
              <Image className="footer__img" src={Logo} alt="logo" />
            </Link>
            <p className="mb-8 text-xl ">
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
            <ul className="text-primary flex gap-[54px] justify-center xl:justify-start">
              <li>
                <Link href="">
                  <i className="ri-facebook-fill"></i>
                </Link>
              </li>
              <li>
                <Link href="">
                  <i className="ri-twitter-fill"></i>
                </Link>
              </li>
              <li>
                <Link href="">
                  <i className="ri-linkedin-fill"></i>
                </Link>
              </li>
              <li>
                <Link href="">
                  <i className="ri-instagram-fill"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end">
            <div className="footer__item">
              <h3 className="h3 mb-3">Pages</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="#about">About Us</Link>
                </li>
                <li>
                  <Link href="#testimonial">Testimonials</Link>
                </li>
                <li>
                  <Link href="#work">Our Work</Link>
                </li>
                <li>
                  <Link href="#news">News</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer__item">
              <h3 className="h3 mb-3">Services</h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="#">Kitchen</Link>
                </li>
                <li>
                  <Link href="#">Living Area</Link>
                </li>
                <li>
                  <Link href="#">Bathroom</Link>
                </li>
                <li>
                  <Link href="#">Bedroom</Link>
                </li>
              </ul>
            </div>

            <div className="footer__item max-w-[260px] mx-auto xl:mx-0">
              <h3 className="h3 mb-3">Contact</h3>
              <div className="flex flex-col gap-6 text-[20px] ">
                <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
                <p>contact@interno.com</p>
                <p>(123) 456 - 7890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="footer__copyright text-center text-lg py-10 bg-white xl:border-t">
        Copyright &copy; Interno 2025. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
