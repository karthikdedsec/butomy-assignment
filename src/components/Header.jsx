import { GiHamburgerMenu } from "react-icons/gi";
import Background from "../assets/figma/header/Background.png";
import Logo from "../assets/figma/header/Logo.png";
import Clock from "../assets/figma/header/clock.png";
import Mail from "../assets/figma/header/mail.png";
import Phone from "../assets/figma/header/phone.png";
import Ship from "../assets/figma/body/ship.jpg";
import Follow from "../assets/figma/header/Follow.png";
import Button from "../assets/figma/header/Button.png";

function Header() {
  return (
    <header>
      <div className="w-full bg-[#091242] p-10 z-10">
        <div className="flex sm:flex md:gap-4 justify-between items-center  max-w-5xl mx-auto">
          <img
            className="w-[120px] h-[18px] md:w-[198px] md:h-[32px] "
            src={Logo}
            alt="logo"
          />
          <GiHamburgerMenu className="lg:hidden text-white" />
          {/* clock and mail icons */}
          <div className="hidden lg:flex  md:flex-row gap-5 flex-wrap ">
            <div className="flex items-center">
              <img className="w-12 h-12" src={Clock} alt="clock" />
              <p className="text-white text-nowrap text-xs pl-2">
                Mon - Sat 9.00 - 18.00 <br /> Sunday Closed
              </p>
            </div>
            <div className="flex items-center">
              <img className="w-12 h-12" src={Mail} alt="mail" />
              <p className="text-white text-xs pl-2">
                Email <br />
                contact@logistics.com
              </p>
            </div>
            <div className="flex items-center">
              <img className="w-12 h-12" src={Phone} alt="phone" />
              <p className="text-white text-xs pl-2">
                Call Us <br />
                (00) 112 365 489
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        {/* second sec */}
        <div className="relative">
          <img src={Ship} alt="ship" />
        </div>
        {/* home about section */}
        <div className="w-full flex absolute lg:bg-[#09124240] top-0 min-h-[40px]  ">
          <div className="hidden lg:flex lg:pl-30 gap-96  items-center mx-auto">
            <div className="flex gap-4 text-white">
              <p className="border-r pr-3 active:underline hover:cursor-pointer">
                Home
              </p>
              <p className="border-r pr-3 active:underline hover:cursor-pointer">
                About
              </p>
              <p className="border-r pr-3 active:underline hover:cursor-pointer">
                Pages
              </p>
              <p className="border-r pr-3 active:underline hover:cursor-pointer">
                Project
              </p>
              <p className="active:underline hover:cursor-pointer">Contact</p>
            </div>
            <div className="flex items-center gap-1">
              <div className="pr-7">
                <img src={Follow} alt="follow" />
              </div>
              <div className="hover:cur text-nowrap bg-white text-slate-800 py-4 px-6 font-semibold text-xs h-[49px]">
                Request Quote
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 absolute top-[40%] left-[20%] z-20 ">
          <h1 className="text-white md:text-4xl font-extrabold">
            Your Gateway <br />
            to any Destination in the
            <br /> World
          </h1>
          <div className="max-w-md">
            <p className="hidden lg:block text-slate-300">
              In augue ligula, feugiat ut nulla consequat. Ut est lacus,
              molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl
              id dapibus finibus, enim diam interdum nulla, sed laoreet risus
              lectus.
            </p>
          </div>
          {/* button */}
          <div className="sm:w-[170px] sm:h-[48px] w-[120px] h-[42px]">
            <img className="object-contain" src={Button} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
