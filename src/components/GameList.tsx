import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Game from './Game';
// import { fetchBio } from './api.js';
// import GameInAListInterface from "../interfaces/GameInAListInterface";

function GameList() {
  const [games, setGames] = useState([1,2,3]);
  useEffect(() => {});

  // const listItems = <GameInAListInterface>[];
  // const listItems = ['game1', 'game2'];

  let listItems = games.map((game) => {
    // <Game title={title} key={game.id} />;
    return <Game />;
  });

  // title: string,
  // dateOfRelease: Date,
  // publisher: string,
  // genre: string,
  // imgSrc: string,
  return <ul>{listItems}</ul>;
  // return (
  //   <>
  //     <Link to="/game">A game</Link>
  //     Game Info ...
  //     <button>Return to Main page</button>
  //   </>
  // );
}

export default GameList;
