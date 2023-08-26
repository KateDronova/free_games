import { useEffect, useState } from 'react';
import Game from './Game';
import { GameInAListInterface } from '../interfaces/gameInAListInterface';

function GameList() {
  const [games, setGames] = useState<[]>([]);
  const url = 'https://www.freetogame.com/api/games';

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      })
      .catch((error) => console.log('New error: ', error.message));
  }, [games]);

  // useEffect(() => {
  //   let ignore = false;
  //   setBio(null);
  //   fetch(url) //path to the file with json data
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       while (gameList.length < 100) {
  //         gameList.push(...data);
  //       }
  //       if (!ignore) {
  //         setBio(data)
  //       }
  //       init(gameList);
  //     });
  //     return () => {
  //       ignore = true;
  //     }
  // }, [gameList]);

  return games ? (
    games.map((game: GameInAListInterface) => (
      <Game
        key={game.id}
        id={game.id}
        title={game.title}
        release_date={game.release_date}
        publisher={game.publisher}
        genre={game.genre}
        thumbnail={game.thumbnail}
      />
    ))
  ) : (
    <p>Loading...</p>
  );
}

export default GameList;
