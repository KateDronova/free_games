import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <header>
        <h1>Free-To-Play Games</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <span>
          Ekaterina Dronova on{' '}
          <a
            href="https://github.com/KateDronova"
            target="_blank"
            rel="noreferrer"
          >
            GitHub,
          </a>
        </span>
        <span>2023</span>
        <span>
          Источник / The source of API :{' '}
          <a href="https://www.freetogame.com/api-doc">FreeToGame.com</a>
        </span>
      </footer>
    </>
  );
}

export default Root;
