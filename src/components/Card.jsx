import React from "react";

function Card(props) {
  const cardID = props.id;
  return (
    <img
      src={props.src}
      alt=""
      className="opacity-100 border-2 rounded-lg border-white h-[240px] max-h-[240px] w-[240px] hover:cursor-pointer wobble"
      onClick={(event) => props.onclick(event, cardID)}
    />
  );
}

export default Card;
