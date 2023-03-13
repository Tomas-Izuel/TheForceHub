import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { CharacterContext } from "../../../context/CharacterContext";
import CharacterList from "../../CharacterList/CharacterList";

import { JellyTriangle } from "@uiball/loaders";

const CharacterListContainer = () => {
  const navigate = useNavigate();
  const { addCharacter, films } = useContext(CharacterContext);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { cid = "" } = useParams();

  const handleData = (data) => {
    getAllInfo(data);
    navigate("/mysearchs");
  };

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

  const nextPage = () => {
    setPage(page + 1);
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?search=${cid}&page=${page}`)
      .then((response) => response.json())
      .then((responseData) => {
        setIsLoading(false);
        setData(responseData);
        if (responseData.results.length === 1) {
          getAllInfo(responseData.results[0]);
        }
      });
  }, [cid, page]);
  return (
    <div className="flex justify-start items-center py-28 text-white flex-col gap-5">
      {isLoading ? (
        <div className=" w-screen h-screen bg-slate-900 bg-opacity-30 z-20 absolute flex justify-center items-center">
          {" "}
          <JellyTriangle size={50} color="#FFFFFF" />
        </div>
      ) : (
        <>
          <h1 className="text-xl font-bold">Your search response</h1>
          {data.results.length !== 1 ? (
            <p className="text-center px-2">
              Your search yielded multiple results, click on the one you wish to
              add.
            </p>
          ) : (
            <p className="text-center px-2">Character added to mysearchs</p>
          )}

          <CharacterList
            characters={data.results}
            handleData={handleData}
            preview={true}
          />
          <div className="flex gap-5">
            {data.previous ? (
              <button
                className=" bg-slate-300 text-black p-2 rounded-xl"
                onClick={prevPage}
              >
                Prev page
              </button>
            ) : (
              <></>
            )}

            {data.next ? (
              <button
                className=" bg-slate-300 text-black p-2 rounded-xl"
                onClick={nextPage}
              >
                Next page
              </button>
            ) : (
              <></>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterListContainer;
