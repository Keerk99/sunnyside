import logo from "../../assets/img/logo-footer.svg";
import {
  GrFacebook,
  GrInstagram,
  GrTwitter,
  GrPinterest,
} from "react-icons/gr";

export default function Footer() {
  return (
    <footer>
      <div className="p-16 bg-light-green flex flex-col gap-8 items-center max-xs:px-4">
        <a href="#header">
          <img
            src={logo}
            alt="Sunnyside's logo"
            className="w-40 max-lg:w-36 "
          />
        </a>
        <div className="flex flex-col gap-20 items-center max-xl:gap-16">
          <ul className="flex gap-16 text-green-700 font-barlow text-lg font-medium max-xl:text-base max-xl:gap-14 max-lg:text-sm max-xs:gap-9">
            <li>
              <a
                href="https://www.frontendmentor.io/profile/Keerk99"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors ease-in duration-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Keerk99"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors ease-in duration-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="https://keerk99.github.io/MyPortfolio/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors ease-in duration-500"
              >
                Projects
              </a>
            </li>
          </ul>
          <ul className="flex gap-8 items-center text-[#2C7566] text-xl">
            <li>
              <a
                href="https://www.frontendmentor.io/profile/Keerk99"
                target="_blank"
                rel="noreferrer"
              >
                <GrFacebook className="hover:text-white transition-colors ease-in duration-500" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Keerk99"
                target="_blank"
                rel="noreferrer"
              >
                <GrInstagram className="hover:text-white transition-colors ease-in duration-500" />
              </a>
            </li>
            <li>
              <a
                href="https://keerk99.github.io/MyPortfolio/"
                target="_blank"
                rel="noreferrer"
              >
                <GrTwitter className="hover:text-white transition-colors ease-in duration-500" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/keerk99/?locale=en_US"
                target="_blank"
                rel="noreferrer"
              >
                <GrPinterest className="hover:text-white transition-colors ease-in duration-500" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
