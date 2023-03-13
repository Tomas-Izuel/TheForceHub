const CharacterCard = ({ character, handleData, preview }) => {
  const stylePreview =
    "bg-white text-black rounded-xl overflow-hidden h-50 p-4 flex justify-start items-start flex-col w-80";

  const style =
    "bg-white text-black rounded-xl overflow-hidden h-96 p-4 flex justify-start items-start flex-col w-80";
  const handleClick = () => {
    handleData(character);
  };
  return (
    <article className={preview ? stylePreview : style} onClick={handleClick}>
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
        Created: <span className=" text-slate-500">{character.created}</span>
      </p>
      {preview ? (
        <></>
      ) : (
        <>
          <p className="flex flex-col items-start">
            Homeworld:{" "}
            <span className=" text-slate-500">{character.homeworld}</span>
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
        </>
      )}
    </article>
  );
};

export default CharacterCard;
