import { useSelector, useDispatch } from 'react-redux';
import {
  tempSaveOpenedGameInfo,
  removeOpenedGameInfo,
} from '../redux/gameSlice';
import { selectOpenedGames } from '../redux/gameSlice';

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Carousel, Space, List } from 'antd';
import { GameInterface } from '../interfaces/gameInterface';
import ErrorPage from '../pages/ErrorPage';
import dateFormatter from '../utils/dateFormatter';
import getBasicInfo from '../utils/getBasicInfo';
const originalFetch = require('isomorphic-fetch');
const fetch = require('fetch-retry')(originalFetch);

function GamePageContent() {
  const [game, setGame] = useState<GameInterface | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const location = useLocation();
  const { id } = location.state;
  // const url = `https://www.freeERRORtogame.com/api/game?id=${id}`;
  const url = `https://www.freetogame.com/api/game?id=${id}`;

  const date: string = game?.release_date
    ? dateFormatter(`${game?.release_date}`)
    : '';

  const screenshots = game?.screenshots.map((item) => {
    return (
      <li key={item.id}>
        <img src={item.image} alt="screenshot" width="100%" />
      </li>
    );
  });

  const graphics = game?.minimum_system_requirements?.graphics || '?';
  const memory = game?.minimum_system_requirements?.memory || '?';
  const os = game?.minimum_system_requirements?.os || '?';
  const processor = game?.minimum_system_requirements?.processor || '?';
  const storage = game?.minimum_system_requirements?.storage || '?';
  const basicInfo = getBasicInfo(game, date);

  const dispatch = useDispatch();
  const openedGames = useSelector(selectOpenedGames);
  const currentGame = openedGames.find(
    (item: GameInterface) => +item.id === +id
  );

  useEffect(() => {
    const loaderElem: HTMLDivElement | null =
      document.querySelector('.loaderForGamePage');
    const hideLoader = () => {
      if (loaderElem && !loaderElem.classList.contains('hidden')) {
        loaderElem.classList.add('hidden');
        setIsLoading(false);
      }
    }
    if (currentGame) {
      setGame(currentGame);
      hideLoader();
    } else {
      fetch(url, {
        retries: 3,
        retryDelay: 2000,
      })
        .then((response: Response) => response.json())
        .then((data: GameInterface) => {
          setGame(data);
          dispatch(tempSaveOpenedGameInfo(data));
          setTimeout(() => {
            dispatch(removeOpenedGameInfo());
          }, 300000);
          hideLoader();
        })
        .catch((error: Error) => {
          setError(error);
          hideLoader();
        });
    }
  }, [currentGame, url, dispatch]);

  if (isLoading) {
    return null;
  }

  return error ? (
    <ErrorPage errorMessage={error.message} />
  ) : (
    <>
      <h2>{game?.title}</h2>

      <Space
        style={{ display: 'flex', marginBottom: '20px' }}
        size={'large'}
        direction="horizontal"
        wrap
        className="just-content-space-between"
        align="start"
      >
        <img src={game?.thumbnail} alt="poster" />
        <section>
          <List
            size="small"
            header={
              <h3 style={{ margin: 0 }}>Общая Информация / Common Info</h3>
            }
            dataSource={basicInfo}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </section>
        <button>
          <Link to="/">Return to Main page</Link>
        </button>
      </Space>

      <Carousel>{screenshots}</Carousel>

      <section>
        <h3>Cистемные требования / Requirements :</h3>
        <ul>
          <li>Платформа / Platform : {game?.platform}</li>
          <li>Графика / Graphics : {graphics}</li>
          <li>Оперативная память / Memory : {memory}</li>
          <li>ОС / OS : {os}</li>
          <li>Процессор / Processor : {processor}</li>
          <li>Объём данных / Storage : {storage}</li>
        </ul>
      </section>
    </>
  );
}

export default GamePageContent;
