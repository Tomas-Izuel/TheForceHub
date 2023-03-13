import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { AiOutlineRight, AiFillHome, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/character/${searchTerm}`);
  };
  return (
    <header className=" w-screen flex xl:justify-between justify-center items-center fixed p-6 bg-slate-800 bg-opacity-20 backdrop-blur-sm">
      <div className="flex justify-center items-center gap-7">
        <NavLink to={"/"}>
          <button className=" border-b-2 border-slate-900 hover:border-slate-200 transition-all duration-500 text-white text-xl hidden xl:flex justify-center items-center gap-2">
            Home <AiFillHome className="" />
          </button>
        </NavLink>
        <NavLink to={"/mysearchs"}>
          <button className=" border-b-2 border-slate-900 hover:border-slate-200 transition-all duration-500 text-white text-xl hidden xl:flex justify-center items-center gap-2">
            My searchs <AiOutlineSearch className="" />
          </button>
        </NavLink>
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="sm:w-2/4 border-2 rounded-2xl flex justify-between items-center overflow-hidden border-white transition duration-500"
      >
        <input
          type="text"
          placeholder="Search a character"
          className=" bg-slate-800 bg-opacity-25 text-white w-full outline-none  py-2 px-4"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">
          <AiOutlineRight className=" bg-white w-16 h-10" />
        </button>
      </form>
    </header>
  );
};

export default Navbar;
