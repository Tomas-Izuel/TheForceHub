import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineRight } from "react-icons/ai";

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
    <header className=" w-screen flex xl:justify-end justify-center items-center fixed p-6 bg-slate-800 bg-opacity-20 backdrop-blur-sm">
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
