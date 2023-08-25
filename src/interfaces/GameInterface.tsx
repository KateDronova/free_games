interface GameInAListInterface {
  title: string,
  dateOfRelease: Date,
  publisher: string,
  developer: string, //+
  genre: string,
  imgSrc: string,
  screenshotsUrl: string[], //+
  requirings: string, //+

  // название
  // дата релиза (в российском формате)
  // издатель
  // разработчик
  // жанр
  // картинка/постер
  // карусель скриншотов
  // системные требования
}

export default GameInAListInterface