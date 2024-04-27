/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function CharacterDetail() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalEpisodes, setTotalEpisodes] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/characters/${id}`
        );
        setCharacter(response.data);
        setTotalEpisodes(response.data.episode.length);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching character:", error);
        setError("Error fetching character");
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex justify-center p-20">
      <img
        src={character.image}
        alt={character.name}
        className="h-auto w-2/5 "
      />
      <div className="w-3/5 bg-blue-100 p-20 rounded-lg">
        <h1 className="text-5xl mb-10 font-bold">{character.name}</h1>
        <div className="mb-8">
          <span className="text-4xl">Species: </span>
          <span className="text-4xl font-bold">{character.species}</span>
        </div>
        <div className="mb-8">
          <span className="text-4xl">Status: </span>
          <span className="text-4xl font-bold">{character.status}</span>
        </div>
        <div className="mb-8">
          <span className="text-4xl">Origin: </span>
          <span className="text-4xl font-bold">{character.origin.name}</span>
        </div>
        <div className="mb-8">
          <span className="text-4xl">Location: </span>
          <span className="text-4xl font-bold">{character.location.name}</span>
        </div>
        <div className="mb-8">
          <span className="text-4xl">Gender: </span>
          <span className="text-4xl font-bold">{character.gender}</span>
        </div>
        <div className="mb-8">
          <span className="text-4xl">Created: </span>
          <span className="text-4xl font-bold">{character.created}</span>
        </div>
        {totalEpisodes && (
          <div className="mb-8">
            <Link to="/episodes" className="text-blue-500 font-bold text-4xl">
              Total Episodes:
            </Link>
            <span className="text-4xl font-bold"> {totalEpisodes}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default CharacterDetail;
