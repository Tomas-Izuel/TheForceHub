import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = ({ characters }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-10">
      {characters.map((character) => (
        <CharacterCard character={character} key={character.name} />
      ))}
    </div>
  );
};

export default CharacterList;
