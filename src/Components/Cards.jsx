import { useParams } from "react-router-dom";

const Cards = () => {
  const cardID = useParams();
  console.log(cardID);
  return <div></div>;
};

export default Cards;
