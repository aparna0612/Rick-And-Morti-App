/** @format */

import React, { useState, useEffect } from "react";
import axios from "axios";

function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/episodes");
        setEpisodes(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching episodes:", error);
        setError("Error fetching episodes");
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Episode Lists:</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {episodes.map((episode) => (
          <div key={episode.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold mb-2">{`Episode ${episode.id}: ${episode.name}`}</h2>
            <p className="mb-2">
              Air Date: <strong>{episode.air_date}</strong>
            </p>
            <p className="mb-2">
              Episode: <strong>{episode.episode}</strong>
            </p>
            <h3 className="text-lg font-bold mb-2">Characters:</h3>
            <div className="flex flex-wrap">
              {episode.characters.map((characterUrl) => (
                <Character key={characterUrl} characterUrl={characterUrl} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Character({ characterUrl }) {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(characterUrl);
        setCharacter(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching character:", error);
        setError("Error fetching character");
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [characterUrl]);

  if (loading) {
    return (
      <div className="w-1/4 bg-blue-100 p-4 rounded-lg shadow-md m-2">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-1/4 bg-blue-100 p-4 rounded-lg shadow-md m-2">
        Error fetching character: {error}
      </div>
    );
  }

  return (
    <div className="w-1/4 bg-blue-100 p-4 rounded-lg shadow-md m-2">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-auto mb-2"
      />
      <p className="font-bold">{character.name}</p>
    </div>
  );
}

export default EpisodeList;
