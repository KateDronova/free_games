import { GameInterface } from '../interfaces/gameInterface';

function getBasicInfo(game: GameInterface | null, date: string) {
  const basicInfo: string[] = [
    `Жанр / Genr : ${game?.genre}`,
    `Издатель / Publisher : ${game?.publisher}`,
    `Pазработчик / Developer : ${game?.developer}`,
    `Дата релиза / Release : ${date}`
  ];
  return basicInfo;
}

export default getBasicInfo;
