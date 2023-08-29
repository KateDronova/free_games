import { Space } from 'antd';
import { Outlet } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';

function Root() {
  const headerSize = '2.2em';
  return (
    <>
      <header>
        <Link to="/">
          <h1 style={{ fontSize: headerSize }}>Free-To-Play Games</h1>
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>
          <strong>Ekaterina Dronova</strong> на{' '}
          <a
            href="https://github.com/KateDronova"
            target="_blank"
            rel="noreferrer"
          >
            GitHub,
          </a>{' '}
          <b>2023</b>
        </p>
        <p>
          Источник / The source of API :{' '}
          <a href="https://www.freetogame.com/api-doc">FreeToGame.com</a>
        </p>
      </footer>
    </>
  );
}

export default Root;
