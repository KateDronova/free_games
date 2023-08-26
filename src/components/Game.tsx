import { Link } from 'react-router-dom';
import { GameInAListInterface } from '../interfaces/gameInAListInterface';
import dateFormatter from '../dateFormatter';

function Game({
  id,
  title,
  release_date,
  publisher,
  genre,
  thumbnail,
}: GameInAListInterface) {

  const date = dateFormatter(release_date);
  const link = `${id}`;

  return (
    <Link to={link} className='game' state={{ id: link }}>
      <h3>{title}</h3>
      <img src={thumbnail} alt="poster"></img>
      <p>Жанр / Genr : {genre}</p>
      <p>Издатель / Publisher : {publisher}</p>
      <p>Дата релиза / Release : {date}</p>
    </Link>
  );
}

export default Game;
