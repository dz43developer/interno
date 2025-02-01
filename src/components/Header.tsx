"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/images/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nav_btn_handler = () => {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <header className="sticky top-0 h-[90px] shadow-xl z-30 bg-white">
      <div className="container mx-auto flex justify-between h-full items-center">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
        <nav>
          {/* nav mobile trigger */}
          <div
            className="cursor-pointer lg:hidden"
            id="nav_btn"
            onClick={nav_btn_handler}
          >
            <i className="ri-menu-4-line text-4xl text-primary"></i>
          </div>

          <ul
            className={`${
              isOpen ? "nav-is-open" : ""
            } fixed w-full p-0 h-0 bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300`}
          >
            <li>
              <Link href="/" onClick={nav_btn_handler}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={nav_btn_handler}>
                About
              </Link>
            </li>
            <li>
              <Link href="#testimonial" onClick={nav_btn_handler}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#work" onClick={nav_btn_handler}>
                Our Work
              </Link>
            </li>
            <li>
              <Link href="#news" onClick={nav_btn_handler}>
                News
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={nav_btn_handler}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
