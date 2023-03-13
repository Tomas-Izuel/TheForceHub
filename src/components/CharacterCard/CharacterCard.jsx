const CharacterCard = ({ character }) => {
  return (
    <div className=" bg-white text-black rounded-xl overflow-hidden h-64 flex">
      <img src={character.image} alt="" className=" shadow-2xl h-full" />
      <div className="p-4">
        <h1 className="text-xl font-medium">{character.name}</h1>
        <p>
          Gender: <span className=" text-slate-500">{character.gender}</span>
        </p>
        <p>
          Birth year:{" "}
          <span className=" text-slate-500">{character.birth_year}</span>
        </p>
        <p>
          Height: <span className=" text-slate-500">{character.height}</span>
        </p>
        <p>
          Mass: <span className=" text-slate-500">{character.mass}</span>
        </p>
        <p>
          Homeworld:{" "}
          <span className=" text-slate-500">{character.homeworld}</span>
        </p>
        <p>
          Created: <span className=" text-slate-500">{character.created}</span>
        </p>
        <div>
          <p>Films:</p>
          <div className=" ml-2">
            {character.films.map((e) => (
              <p key={e} className="text-slate-600 text-sm">
                {e}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
