import { createContext, useEffect, useState } from "react";

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [films, setFilms] = useState([]);
  console.log(characters);
  //Para evitar realizar muchas peticiones a la API, obtengo las 6 peliculas de Stars Wars haciendo un fetch cuando se entra a la web y asigno localmente el nombre al personaje buscado despues
  useEffect(() => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((result) => setFilms(result));
  }, []);

  const addCharacter = (character) => {
    console.log(characters);
    let flag = false;
    //Validar que no se agregue 2 veces el mismo personaje
    characters.forEach((c) => {
      console.log(c.name);
      console.log(character.name);
      if (c.name === character.name) {
        flag = true;
      }
    });
    if (!flag) {
      setCharacters([...characters, character]);
    }
  };

  return (
    <CharacterContext.Provider
      value={{
        characters,
        films,
        addCharacter,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
