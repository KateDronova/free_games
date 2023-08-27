import GameList from '../components/GameList';
import Loader from '../components/Loader';

function MainPage() {
  return (
    <>
      <section>
        <nav>
          Поиск / Search
          <input type="text"></input>
        </nav>
        <div className="loaderForMainPage">
          <Loader />
        </div>
        <GameList />
      </section>
    </>
  );
}

export default MainPage;
