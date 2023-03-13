import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterList = ({ characters, handleData, preview }) => {
  return (
    <section className="flex flex-wrap justify-center items-center gap-4 p-10">
      {characters.map((character) => (
        <CharacterCard
          character={character}
          key={character.name}
          handleData={handleData}
          preview={preview}
        />
      ))}
    </section>
  );
};

export default CharacterList;
