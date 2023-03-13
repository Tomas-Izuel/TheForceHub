import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { CharacterContext } from "../../../context/CharacterContext";

const CharacterListContainer = () => {
  const { addCharacter, films } = useContext(CharacterContext);
  const [searchCharacters, setSearchCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const { cid } = useParams();

  const buildCharacterObject = (nameHomeworld, filmsCharacter, c) => {
    const character = {
      name: c.name,
      birth_year: c.birth_year,
      created: c.created,
      gender: c.gender,
      height: c.height,
      mass: c.mass,
      homeworld: nameHomeworld,
      films: filmsCharacter,
    };
    addCharacter(character);
  };

  const getAllInfo = async (character) => {
    const homeworld = await (await fetch(character.homeworld)).json();
    const filmsCharacter = character.films.map((film) => {
      switch (film.slice(28, 29)) {
        case "1":
          return films[0];
        case "2":
          return films[1];
        case "3":
          return films[2];
        case "4":
          return films[3];
        case "5":
          return films[4];
        case "6":
          return films[5];
      }
    });
    buildCharacterObject(homeworld.name, filmsCharacter, character);
  };

  useEffect(() => {
    if (cid) {
      fetch(`https://swapi.dev/api/people/?search=${cid}&page=${page}`)
        .then((response) => response.json())
        .then((responseData) => {
          if (responseData.results.length === 1) {
            getAllInfo(responseData.results[0]);
          }
        });
    } else {
      fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then((response) => response.json())
        .then((responseData) => {
          setSearchCharacters(responseData);
        });
    }
  }, []);

  return <div>CharacterListContainer</div>;
};

export default CharacterListContainer;
