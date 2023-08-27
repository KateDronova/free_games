import { useEffect, useState } from 'react';
import Game from './Game';
import { GameInAListInterface } from '../interfaces/gameInAListInterface';

function GameList() {
  const [games, setGames] = useState<[]>([]);
  const url = 'https://www.freetogame.com/api/games';
  const [isLoading, setIsLoading] = useState(true);

  const getGameList: Function = (games: any[]): React.ReactElement[] =>
    games.map((game: GameInAListInterface) => {
      const gameProps = { key: game.id, ...game };
      return <Game {...gameProps} />;
    });


  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setGames(data);
    })
    .then(() => {
      const loaderElem = document.querySelector('.loaderForMainPage');
      if (loaderElem) {
        loaderElem.remove();
        setIsLoading(!isLoading);
      }
    })
    .catch((error) => console.log('New error: ', error.message));
  }, []);

  if (isLoading) {
    return null;
  }

  return getGameList(games);
}

export default GameList;
