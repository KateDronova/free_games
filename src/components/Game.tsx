import { Link } from "react-router-dom";

// function Game({title, dateOfRelease, publisher, genre, imgSrc}) {
function Game() {
  const imgSrc = '../../public/logo512.png';

  return (
    <>
      <Link to="game/:gameId">
        <h3>title</h3>
        <img src={imgSrc} alt="poster"></img>
        <p>dateOfRelease</p>
        <p>publisher</p>
        <p>genre</p>
      </Link>
    </>
  );
}

export default Game;
