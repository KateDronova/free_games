import Loader from '../components/Loader';
import GamePageContent from '../components/GamePageContent';

function GamePage() {
  return (
    <>
      <div className="loaderForGamePage">
        <Loader />
      </div>
      <GamePageContent />
    </>
  );
}

export default GamePage;
