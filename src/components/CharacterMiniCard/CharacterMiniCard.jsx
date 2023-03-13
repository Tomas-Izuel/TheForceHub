import { AiOutlinePlusCircle } from "react-icons/ai";

const CharacterMiniCard = ({ Character }) => {
  return (
    <div>
      <h3>{Character.name}</h3>
      <AiOutlinePlusCircle className=" bg-white w-16 h-10" />
    </div>
  );
};

export default CharacterMiniCard;
