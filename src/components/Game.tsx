import { Link } from 'react-router-dom';
import { GameInAListInterface } from '../interfaces/gameInAListInterface';
import { List } from 'antd';
import dateFormatter from '../utils/dateFormatter';
// import getBasicInfo from '../utils/getBasicInfo';

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

  function getBasicInfoMain() {
    const basicInfoMain: string[] = [
      `Жанр / Genr : ${genre}`,
      `Издатель / Publisher : ${publisher}`,
      `Дата релиза / Release : ${date}`,
    ];
    return basicInfoMain;
  }

  return (
    <Link to={link} state={{ id: link }}>
      <div className="game">
        <h3>{title}</h3>
        <img src={thumbnail} alt="poster"></img>
        <List
          size="small"
          dataSource={getBasicInfoMain()}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        ></List>
      </div>
    </Link>
  );
}

export default Game;
