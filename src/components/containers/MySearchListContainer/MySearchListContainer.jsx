import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { CharacterContext } from "../../../context/CharacterContext";
import CharacterList from "../../CharacterList/CharacterList";
import SelectFilter from "../../SelectFilter/SelectFilter";

import { AiFillHome } from "react-icons/ai";

const MySearchListContainer = () => {
  const { characters } = useContext(CharacterContext);
  return (
    <div className="py-24 text-white flex justify-center items-center flex-col gap-4">
      <h1 className="text-xl font-bold">My searchs</h1>
      <SelectFilter />
      <CharacterList
        characters={characters}
        handleData={() => {}}
        preview={false}
      />
      <NavLink to={"/"}>
        <button className=" bg-slate-300 text-black py-3 px-5 text-xl rounded-xl flex justify-center items-center gap-2 xl:hidden">
          Home <AiFillHome className="" />
        </button>
      </NavLink>
    </div>
  );
};

export default MySearchListContainer;
