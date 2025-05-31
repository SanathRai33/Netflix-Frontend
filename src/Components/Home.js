import { useState } from "react";
import "../CSS/Home.css";
import {
  bollywoodMovies,
  internationalMovies,
  horrorMovies,
  animatedMovies,
  realMovies,
  southIndMovies,
  actionAdvMovies,
  comedyRomMovies,
  loveMovies,
} from "../Components/Data";
import MovieCards from "./MovieCards";
import Navbar from "./Navbar";

export default function Home() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleView = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <>
    <Navbar/>
    <div className="Home">
      <div className="hero">
        <h1>Movies</h1>
        <p>
          Movies move us like nothing else can, whether they're scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience.
        </p>
      </div>

      <div className="movieColumn">
        <p>Action & Adventure Movies</p>
        <div className="movies">
          {actionAdvMovies.map((card, ind) => {
            return (
              <div className="movieCard" onClick={() => handleView(card)}>
                <img src={card.img} alt={ind} />
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="movieColumn">
        <p>Bollywood Top Movies</p>
        <div className="movies">
          {bollywoodMovies.map((card, ind) => {
            return (
              <div className="movieCard" onClick={() => handleView(card)}>
                <img src={card.img} alt={ind} />
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="movieColumn">
        <p>International Movies</p>
        <div className="movies">
          {internationalMovies.map((card, ind) => {
            return (
              <div className="movieCard" onClick={() => handleView(card)}>
                <img src={card.img} alt={ind} />
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="movieColumn">
        <p>Horror Movies</p>
        <div className="movies">
          {horrorMovies.map((card, ind) => {
            return (
              <div className="movieCard" onClick={() => handleView(card)}>
                <img src={card.img} alt={ind} />
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="movieColumn">
        <p>Animated Movies</p>
        <div className="movies">
          {animatedMovies.map((card, ind) => {
            return (
              <div className="movieCard" onClick={() => handleView(card)}>
                <img src={card.img} alt={ind} />
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="movieColumn">
        <p>South Indian Movies</p>
        <div className="movies">
          {southIndMovies.map((card, ind) => {
            return (
              <div className="movieCard" onClick={() => handleView(card)}>
                <img src={card.img} alt={ind} />
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="movieColumn">
        <p>Real Story Based Movies</p>
        <div className="movies">
          {realMovies.map((card, ind) => {
            return (
              <div className="movieCard" onClick={() => handleView(card)}>
                <img src={card.img} alt={ind} />
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="movieColumn">
        <p>Comedy & Romantic Movies</p>
        <div className="movies">
          {comedyRomMovies.map((card, ind) => {
            return (
              <div className="movieCard" onClick={() => handleView(card)}>
                <img src={card.img} alt={ind} />
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="movieColumn">
        <p>Love Story Movies</p>
        <div className="movies">
          {loveMovies.map((card, ind) => {
            return (
              <div className="movieCard" onClick={() => handleView(card)}>
                <img src={card.img} alt={ind} />
                <p>{card.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      {selectedCard && (
        <MovieCards movie={selectedCard} onClose={handleClose} />
      )}
    </div>
    </>
  );
}
