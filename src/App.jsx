import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/card";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchNames = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=30"
      );
      const results = response.data.results;

      const fetchPokiData = async (url) => {
        const response = await axios.get(url);
        return response.data;
      };

      const pokiDataPromises = results.map((pokemon) =>
        fetchPokiData(pokemon.url)
      );
      const pokiData = await Promise.all(pokiDataPromises);
      setData(pokiData);
    };

    fetchNames();
  }, []);

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleClosePopup = () => {
    setSelectedPokemon(null);
  };

  const filteredData = data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery)
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <nav className="fixed flex  flex-wrap  bg-white z-30 w-full ">
          <div className=" flex flex-col md:flex-row gap-8 w-full justify-between m-auto md:w-1/2 py-3">
            <a href="/"><img className="w-[30vh]" src="/logo.png" alt="" /></a>
            <div className="search-bar">
              <input
                type="text"
                className="border-2 border-gray-300 m-auto bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                placeholder="Search Pokémon..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </nav>
        <div className="flex flex-wrap mt-24">
          {filteredData.map((pokemon, index) => (
            <Card
              key={index}
              pokemon={pokemon}
              onClick={() => handleCardClick(pokemon)}
            />
          ))}
        </div>

        {selectedPokemon && (
          <section class="text-gray-600 body-font pb-5 md::w-3/4 xl:w-1/2 mt-28 fixed flex flex-col right-1/4 z-20 bg-white">
            <div className="w-full">
              <button
                onClick={handleClosePopup}
                className="bg-blue-500  order-last hover:bg-blue-700 w-16 float-end px-3 py-1 rounded text-white  m-5"
              >
                Close
              </button>
            </div>
            <div class=" flex  md:flex-row flex-col text-base">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img
                  class="object-cover object-center rounded w-full"
                  alt="hero"
                  src={selectedPokemon.sprites.front_default}
                />
              </div>
              <div class="w-full md:w-1/2 flex flex-col text-start gap-2 ms-16">
                <h1 class=" text-3xl font-bold	mb-8 text-black capitalize ">
                  {selectedPokemon.name}
                </h1>

                <p class="leading-relaxed font-bold">
                  Height:{" "}
                  <span className="font-normal">{selectedPokemon.height}</span>
                </p>
                <p class="leading-relaxed font-bold">
                  Weight:{" "}
                  <span className="font-normal">{selectedPokemon.weight}</span>
                </p>
                <div className="flex gap-3">
                  <p class=" leading-relaxed font-bold	">Abilities:</p>
                  <ul className="flex gap-3 capitalize">
                    {selectedPokemon.abilities.map((ability, index) => (
                      <li key={index}> {ability.ability.name},</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p class="leading-relaxed font-bold">
                    Experience:{" "}
                    <span className="font-normal">
                      {selectedPokemon.base_experience}
                    </span>
                  </p>
                </div>
                <div className="flex gap-3">
                  <p class=" leading-relaxed font-bold	">Moves:</p>
                  <ul className="flex flex-col gap-0 capitalize max-w-28">
                    {selectedPokemon.moves.slice(0, 7).map((move, index) => (
                      <li key={index} n className="">
                        {" "}
                        {move.move.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default App;
