import { Link } from "react-router-dom";


function GamePage() {
  const imgSrc = '../../public/logo512.png';

  return (
    <>
      <h2>title</h2>
      <img src={imgSrc} alt="poster"></img>
      <p>dateOfRelease</p>
      <p>publisher</p>
      <p>developer</p>
      <p>genre</p>
      <nav>
        <ul>
          <li>
            <img src="../../public/logo512.png" alt="screenshot" />
          </li>
          <li>
            <img src="../../public/logo512.png" alt="screenshot" />
          </li>
          <li>
            <img src="../../public/logo512.png" alt="screenshot" />
          </li>
        </ul>
      </nav>
      <p>requirings</p>
      <button>
        <Link to="/">Return to Main page</Link>
      </button>
    </>
  );
}

export default GamePage;
