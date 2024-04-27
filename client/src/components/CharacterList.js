/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/characters"
        );
        setCharacters(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setError("Error fetching characters");
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-blue-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Character Lists: </h1>
      <div className="grid grid-cols-3 gap-4">
        {characters.map((character) => (
          <div
            key={character.id}
            className="bg-white rounded-lg shadow-md p-4 flex">
            <img
              src={character.image}
              alt={character.name}
              className="w-32 h-auto mr-4"
            />
            <div className="flex flex-col justify-between">
              <Link to={`/character/${character.id}`}>
                <h2 className="text-xl font-bold mb-2 text-blue-500">
                  {character.name}
                </h2>
              </Link>
              <p className="text-lg mb-2">
                Species: <span className="font-bold">{character.species}</span>
              </p>
              <p className="text-lg">
                Origin:{" "}
                <span className="font-bold">{character.origin.name}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterList;
