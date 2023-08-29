import { useEffect, useState, SetStateAction } from 'react';
import { GameInAListInterface } from '../interfaces/gameInAListInterface';
import { GameListPropsInterface } from '../interfaces/gameListPropsInterface';
import { Space } from 'antd';
import Game from './Game';
import ErrorPage from '../pages/ErrorPage';
const originalFetch = require('isomorphic-fetch');
const fetch = require('fetch-retry')(originalFetch);

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
    fetch(urlCommon, {
      retries: 3,
      retryDelay: 2000
    })
      .then((response: Response) => response.json())
      .then((data: SetStateAction<[]>) => {
        setGames(data);
      })
      .catch((error: Error) => {
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
  }, [sortCategory, filterCategory, filterItem, isLoading, urlCommon]);

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
