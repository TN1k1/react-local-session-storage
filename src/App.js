import "./App.css";
import React, { useEffect, useState } from "react";
import Beer from "./components/Beer";

function App() {
  const [beers, setBeers] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setBeers([
      {
        name: "Ürős világos",
        id: 15,
      },
      {
        name: "Darkside",
        id: 25,
      },
      {
        name: "Arnold",
        id: 56,
      },
      {
        name: "Light alcohol",
        id: 68,
      },
      { name: "Christal", id: 96 },
    ]);
  }, []);

  useEffect(() => {
    const favoritesItem = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesItem) {
      setFavorites(favoritesItem);
    }
  }, []);

  console.log(favorites);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  return (
    <div className='App'>
      {beers.length > 0
        ? beers.map((beer, i) => (
            <Beer
              name={beer.name}
              id={beer.id}
              key={i}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))
        : null}
    </div>
  );
}

export default App;
