import { NavLink } from "react-router-dom";

import "./Home.css";
import logo from "../../assets/TheForceHubLogoWhite.png";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Home = () => {
  return (
    <div className="home flex justify-center items-center md:items-start md:p-40 xl:p-60 flex-col">
      <div className="flex flex-col gap-4">
        <img
          src={logo}
          alt="TheForceHub logo"
          className="textLogo w-72 md:w-auto"
        />
        <NavLink to={"/character"}>
          <button className=" text-white border font-medium md:text-xl border-slate-300 p-3 rounded-xl hover:bg-slate-300 hover:text-black hover:shadow-md hover:shadow-slate-200 transition-all duration-500">
            Characters list
          </button>
        </NavLink>
        <div className="flex justify-start items-center gap-2">
          <NavLink to="https://github.com/Tomas-Izuel">
            <AiFillGithub className="fill-white w-8 h-8 hover:fill-amber-300 transition-all duration-500" />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/tomas-izuel/">
            <AiFillLinkedin className="fill-white w-8 h-8 hover:fill-amber-300 transition-all duration-500" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
