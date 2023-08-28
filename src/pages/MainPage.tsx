import { useState } from 'react';
import GameList from '../components/GameList';
import Loader from '../components/Loader';

function MainPage() {
  const [sortCategory, setSortCategory] = useState('relevance');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterItem, setFilterItem] = useState('');

  return (
    <>
      <section>
        <nav>
          <form>
            <label>
              Фильтр / Filter
              <select
                onChange={(event) => {
                  setFilterItem(event.target.value);
                  event.target.value === 'pc' ||
                  event.target.value === 'browser' ||
                  event.target.value === 'all'
                    ? setFilterCategory('platform')
                    : setFilterCategory('category');
                }}
              >
                <option value="all">Все значения / All items</option>
                <optgroup label="Платформа / Platform" data-category="platform">
                  <option value="pc">PC (Windows)</option>
                  <option value="browser">Web Browser</option>
                </optgroup>
                <optgroup label="Жанр / Category" data-category="category">
                  <option value="2d">2d</option>
                  <option value="3d">3d</option>
                  <option value="action">Action</option>
                  <option value="action-rpg">Action RPG</option>
                  <option value="anime">Anime</option>
                  <option value="battle-royale">Battle Royale</option>
                  <option value="card">Card Game</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="fighting">Fighting</option>
                  <option value="first-person">First-person</option>
                  <option value="flight">Flight</option>
                  <option value="horror">Horror</option>
                  <option value="low-spec">Low-spec</option>
                  <option value="martial-arts">Martial-arts</option>
                  <option value="military">Military</option>
                  <option value="mmorts">mmorts</option>
                  <option value="mmofps">mmofps</option>
                  <option value="mmotps">mmotps</option>
                  <option value="moba">MOBA</option>
                  <option value="mmo">MMO</option>
                  <option value="mmorpg">MMORPG</option>
                  <option value="open-world">Open-world</option>
                  <option value="pve">PVE</option>
                  <option value="pvp">PVP</option>
                  <option value="permadeath">Permadeath</option>
                  <option value="pixel">Pixel</option>
                  <option value="racing">Racing</option>
                  <option value="sailing">Sailing</option>
                  <option value="sandbox">Sandbox</option>
                  <option value="sci-fi">Sci-Fi</option>
                  <option value="side-scroller">Side-scroller</option>
                  <option value="shooter">Shooter</option>
                  <option value="social">Social</option>
                  <option value="space">Space</option>
                  <option value="sports">Sports</option>
                  <option value="strategy">Strategy</option>
                  <option value="survival">Survival</option>
                  <option value="superhero">Superhero</option>
                  <option value="tank">Tank</option>
                  <option value="third-Person">Third-Person</option>
                  <option value="top-down">Top-down</option>
                  <option value="tower-defense">Tower-defense</option>
                  <option value="turn-based">Turn-based</option>
                  <option value="voxel">Voxel</option>
                  <option value="zombie">Zombie</option>
                </optgroup>
              </select>
            </label>
          </form>
          <form>
            <label>
              Сортировка / Sort
              <select
                onChange={(event) => {
                  setSortCategory(event.target.value);
                }}
              >
                <option value="">По умолчанию / By default</option>
                <option value="alphabetical">По алфавиту / Alphabetical</option>
                <option value="popularity">По популярности / Popularity</option>
                <option value="release-date">
                  По дате релиза / Date of release
                </option>
              </select>
            </label>
          </form>
        </nav>
        <div className="loaderForMainPage">
          <Loader />
        </div>
        <GameList
          sortCategory={sortCategory}
          filterCategory={filterCategory}
          filterItem={filterItem}
        />
      </section>
    </>
  );
}

export default MainPage;
