import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { CharacterContext } from "../../../context/CharacterContext";
import CharacterList from "../../CharacterList/CharacterList";

const MySearchListContainer = () => {
  const { characters } = useContext(CharacterContext);
  return (
    <div className="py-24 text-white flex justify-center items-center flex-col">
      <h1 className="text-xl font-bold">My searchs</h1>
      <CharacterList
        characters={characters}
        handleData={() => {}}
        preview={false}
      />
      <NavLink to={"/"}>
        <button className=" bg-slate-300 text-black p-2 rounded-xl">
          Home
        </button>
      </NavLink>
    </div>
  );
};

export default MySearchListContainer;
