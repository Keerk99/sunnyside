import logo from "../../assets/img/logo.svg";
import arrow from "../../assets/img/icon-arrow-down.svg";
import bar from "../../assets/img/icon-hamburger.svg";
import triangle from "../../assets/img/triangle.svg";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header id="header">
      <div className="flex flex-col gap-20 bg-background-header bg-no-repeat bg-cover bg-center h-screen max-xs:gap-10 max-xs:bg-background-header-mobile">
        <div className="flex justify-between p-12 items-center max-xs:px-4">
          <div>
            <img
              src={logo}
              alt="Sunnyside's logo"
              className="w-40 cursor-pointer max-lg:w-36"
            />
          </div>
          <nav
            className={`max-md:absolute max-md:flex max-md:flex-col max-md:mx-12 max-md:left-0 max-md:right-0 max-md:bottom-0 max-md:bg-white max-md:h-fit ${
              open
                ? "max-md:transition-all max-md:duration-1000 max-md:ease-in max-md:top-36 max-md:opacity-100 max-md:z-20 "
                : "max-md:transition-all max-md:duration-1000 max-md:ease-out max-md:top-[90px] max-md:opacity-0 max-md:-z-20"
            } max-xs:mx-4`}
          >
            <span className="hidden max-md:block max-md:relative">
              <img
                src={triangle}
                alt="Bar Menu"
                className="max-md:absolute max-md:right-0 max-md:top-[-34px]"
              />
            </span>
            <ul className="flex gap-12 items-center text-white font-barlow text-lg font-medium max-lg:gap-8 max-lg:text-sm max-md:text-xl max-md:font-semibold max-md:flex max-md:flex-col max-md:gap-12 max-md:text-dark-grayish-blue  max-md:py-14">
              <li>
                <a
                  href="https://www.frontendmentor.io/profile/Keerk99"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-very-dark-desaturated-blue ease-in duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Keerk99"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-very-dark-desaturated-blue ease-in duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="https://keerk99.github.io/MyPortfolio/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-very-dark-desaturated-blue ease-in duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/keerk99/?locale=en_US"
                  target="_blank"
                  rel="noreferrer"
                  className="text-very-dark-desaturated-blue py-4 px-6 bg-white rounded-full font-fraunces font-bold ease-in duration-300 hover:bg-sky-300 hover:text-white max-lg:py-3 max-lg:px-5 max-md:bg-yellow"
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
            <img
              src={bar}
              alt="Bar Menu"
              className={`cursor-pointer ${open ? "hidden" : "block"}`}
              onClick={toggleMenu}
            />
            <AiOutlineClose
              className={`cursor-pointer text-white text-[1.7rem] ${
                open ? "block" : "hidden"
              }`}
              onClick={toggleMenu}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center h-2/4 pb-32 max-xs:gap-[5.5rem]">
          <h1 className="text-6xl font-fraunces font-black text-center text-white tracking-widest max-xl:text-5xl max-lg:text-2.7 max-md:text-4xl  max-xs:text-[2.15rem] max-xs:leading-[3rem]">
            WE ARE CREATIVES
          </h1>
          <a href="#main" className="cursor-pointer animate-custom">
            <img src={arrow} alt="Arrow" />
          </a>
        </div>
      </div>
    </header>
  );
}
