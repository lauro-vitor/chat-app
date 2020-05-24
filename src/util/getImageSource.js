export default function getImageSource(image) {
  switch (image) {
    case 1:
      return require('../img/avatarWoman1.png');
    case 2:
      return require('../img/avatarWoman2.png');
    case 3:
      return require('../img/avatarWoman3.png');
    case 4:
      return require('../img/avatarMen1.png');
    case 5:
      return require('../img/avatarMen2.png');
    case 6:
      return require('../img/avatarMen3.png');
    default:
      break;
  }
}
