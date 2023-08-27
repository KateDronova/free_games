import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GameInterface } from '../interfaces/gameInterface';
import dateFormatter from '../utils/dateFormatter';

function GamePageContent() {
  const [game, setGame] = useState<GameInterface | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { id } = location.state;
  const url = `https://www.freetogame.com/api/game?id=${id}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGame(data);
      })
      .then(() => {
        const loaderElem = document.querySelector('.loaderForGamePage');
        if (loaderElem) {
          loaderElem.remove();
          setIsLoading(!isLoading);
        }
      })
      .catch((error) => console.log('New error: ', error.message));
  }, []);

  const date: string = game?.release_date
    ? dateFormatter(`${game?.release_date}`)
    : '';

  const screenshots = game?.screenshots.map((item) => {
    return (
      <li key={item.id}>
        <img src={item.image} alt="screenshot"></img>
      </li>
    );
  });

  const graphics = game?.minimum_system_requirements.graphics;
  const memory = game?.minimum_system_requirements.memory;
  const os = game?.minimum_system_requirements.os;
  const processor = game?.minimum_system_requirements.processor;
  const storage = game?.minimum_system_requirements.storage;

  if (isLoading) {
    return (
      <>
        <button>
          <Link to="/">Return to Main page</Link>
        </button>
      </>
    );
  }

  return (
    <>
      <h2>{game?.title}</h2>
      <img src={game?.thumbnail} alt="poster"></img>
      <p>Жанр / Genr : {game?.genre}</p>
      <p>Издатель / Publisher : {game?.publisher}</p>
      <p>Pазработчик / Developer : {game?.developer}</p>

      <p>Дата релиза / Release : {date}</p>
      <ul>{screenshots}</ul>

      <p>Cистемные требования / Requirements :</p>
      <ul>
        <li>Графика / Graphics : {graphics}</li>
        <li>Оперативная память / Memory : {memory}</li>
        <li>ОС / OS : {os}</li>
        <li>Процессор / Processor : {processor}</li>
        <li>Объём данных / Storage : {storage}</li>
      </ul>

      <button>
        <Link to="/">Return to Main page</Link>
      </button>
    </>
  );
}

export default GamePageContent;
