import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { CharacterContext } from "../../../context/CharacterContext";
import CharacterList from "../../CharacterList/CharacterList";
import SelectFilter from "../../SelectFilter/SelectFilter";

import { AiFillHome } from "react-icons/ai";

const MySearchListContainer = () => {
  const [genderFilter, setGenderFilter] = useState("all genders");
  const [filmsFilter, setFilmsFilter] = useState("all films");
  const [charactersUI, setCharactersUI] = useState([]);
  const { characters, films } = useContext(CharacterContext);

  const optionsGender = [
    "all genders",
    "male",
    "female",
    "hermaphrodite",
    "n/a",
  ];
  const optionsFilms = ["all films", ...films];

  const handleFilterChange = (filter) => {
    if (
      filter === "all genders" ||
      filter === "male" ||
      filter === "female" ||
      filter === "hermaphrodite" ||
      filter === "n/a"
    ) {
      setGenderFilter(filter);
    } else {
      setFilmsFilter(filter);
    }
  };

  const handleCharacters = () => {
    setCharactersUI([]);
    if (genderFilter === "all genders" && filmsFilter === "all films") {
      setCharactersUI([...characters]);
    } else if (genderFilter !== "all genders" && filmsFilter === "all films") {
      const filtered = characters.filter(
        (character) => character.gender === genderFilter
      );
      setCharactersUI([...filtered]);
    } else if (genderFilter === "all genders" && filmsFilter !== "all films") {
      const filtered = characters.filter((character) => {
        if (character.films.indexOf(filmsFilter) !== -1) {
          return character;
        }
      });
      if (filtered) {
        setCharactersUI([...filtered]);
      } else {
        alert("a");
        setCharactersUI([]);
      }
    }
  };
  useEffect(() => {
    handleCharacters();
  }, [genderFilter, filmsFilter, characters]);
  return (
    <div className="py-24 text-white flex justify-center items-center flex-col gap-4">
      <h1 className="text-xl font-bold">My searchs</h1>
      <div className="flex gap-5 flex-col md:flex-row">
        <SelectFilter
          handleFilterChange={handleFilterChange}
          options={optionsGender}
        />
        <SelectFilter
          handleFilterChange={handleFilterChange}
          options={optionsFilms}
        />
      </div>
      {charactersUI.length > 0 ? (
        <>
          <CharacterList
            characters={charactersUI}
            handleData={() => {}}
            preview={false}
          />
        </>
      ) : (
        <p className="text-center">
          No tienes ningun resultado que coincida con estos parametros
        </p>
      )}
      <NavLink to={"/"}>
        <button className=" bg-slate-300 text-black py-3 px-5 text-xl rounded-xl flex justify-center items-center gap-2 xl:hidden">
          Home <AiFillHome className="" />
        </button>
      </NavLink>
    </div>
  );
};

export default MySearchListContainer;
