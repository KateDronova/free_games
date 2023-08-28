import { useEffect, useState } from 'react';
import Game from './Game';
import { GameInAListInterface } from '../interfaces/gameInAListInterface';
import { GameListPropsInterface } from '../interfaces/gameListPropsInterface';


const GameList: React.FC<GameListPropsInterface> = ({
  sortCategory,
  filterCategory,
  filterItem,
}) => {
  const [games, setGames] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const urlCommon = `https://www.freetogame.com/api/games?${filterCategory}=${filterItem}&sort-by=${sortCategory}`;

  const getGameList: Function = (games: any[]): React.ReactElement[] =>
    games.map((game: GameInAListInterface) => {
      const gameProps = { key: game.id, ...game };
      return <Game {...gameProps} />;
    });

  useEffect(() => {
    fetch(urlCommon)
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      })
      .then(() => {
        const loaderElem: HTMLDivElement | null =
          document.querySelector('.loaderForMainPage');
        if (loaderElem && !loaderElem.classList.contains('hidden')) {
          loaderElem.classList.add('hidden');
          setIsLoading(!isLoading);
        }
      })
      .catch((error) => console.log('New error: ', error.message));
  }, [sortCategory, filterCategory, filterItem]);

  if (isLoading) {
    return null;
  }

  return getGameList(games);
};

export default GameList;
