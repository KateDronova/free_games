import { useEffect, useState } from 'react';
import Game from './Game';
import { GameInAListInterface } from '../interfaces/gameInAListInterface';
import { GameListPropsInterface } from '../interfaces/gameListPropsInterface';
import ErrorPage from '../pages/ErrorPage';
import { Space, List } from 'antd';

const GameList: React.FC<GameListPropsInterface> = ({
  sortCategory,
  filterCategory,
  filterItem,
}) => {
  const [games, setGames] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>();

  // const urlCommon = `https://www.freeERRORtogame.com/api/games?${filterCategory}=${filterItem}&sort-by=${sortCategory}`;
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
      .catch((error) => {
        setError(error);
      })
      .then(() => {
        const loaderElem: HTMLDivElement | null =
          document.querySelector('.loaderForMainPage');
        if (loaderElem && !loaderElem.classList.contains('hidden')) {
          loaderElem.classList.add('hidden');
          setIsLoading(!isLoading);
        }
      });
  }, [sortCategory, filterCategory, filterItem]);

  if (isLoading) {
    return null;
  }

  return error ? (
    <ErrorPage errorMessage={error.message} />
  ) : (
    <Space
      direction="horizontal"
      size="large"
      style={{ display: 'flex' }}
      wrap
      align='center'
      className='just-content-space-between'
    >
      {getGameList(games)}
    </Space>
  );
};

export default GameList;
