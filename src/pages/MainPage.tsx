import GameList from '../components/GameList';

function MainPage() {
  return (
    <nav>
      <section>
        Поиск / Search
        <input type='text'></input>
      </section>
      <section>
        <GameList />
      </section>
    </nav>
  );
}

export default MainPage;
