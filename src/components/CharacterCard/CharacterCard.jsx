const CharacterCard = ({ character, handleData }) => {
  const handleClick = () => {
    handleData(character);
  };
  return (
    <button
      className=" bg-white text-black rounded-xl overflow-hidden h-80 p-4 flex justify-start items-start flex-col w-80"
      onClick={handleClick}
    >
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
      <p className="flex flex-col items-start">
        Homeworld:{" "}
        <span className=" text-slate-500">{character.homeworld}</span>
      </p>
      <p>
        Created: <span className=" text-slate-500">{character.created}</span>
      </p>
      <div className="flex flex-col items-start">
        <p>Films:</p>
        <div className=" ml-2">
          {character.films.map((e) => (
            <p key={e} className="text-slate-600 text-sm">
              {e}
            </p>
          ))}
        </div>
      </div>
    </button>
  );
};

export default CharacterCard;
