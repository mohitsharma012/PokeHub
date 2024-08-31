import React from "react";

const Card = ({ pokemon, onClick }) => {
  return (
      <div onClick={onClick} class="xl:w-1/5 cursor-pointer md:w-1/4 m-auto sm:w-1/3 w-1/2 p-4 transition ease-in-out  hover:scale-105 duration-200">
        <div class="bg-gray-100 p-2 rounded-lg">
          <img
            class="  rounded w-full object-cover object-center mb-3"
            src={pokemon.sprites.front_default}
            alt="content"
          />
          <h3 class="tracking-widest text-indigo-500 text-sm font-medium title-font uppercase">
            {pokemon.types[0].type.name}
          </h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-2 capitalize">
            {pokemon.name}
          </h2>
          {/* <p class="leading-relaxed text-base">
            Fingerstache flexitarian street art 8-bit waistcoat. Distillery
            hexagon disrupt edison bulbche.
          </p> */}
        </div>
    </div>
  );
};

export default Card;
