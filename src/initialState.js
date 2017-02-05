import {
  photos,
  dancers,
  history,
  presentations
} from './photoState';

export default {
  shared: {
    testPics: [
      './assets/dancers-gaze.jpg',
      './assets/foto8.jpg',
      './assets/foto21.jpg',
      './assets/image1-small-23.png'
    ],
    photosPage: photos,
    dancersPage: dancers,
    historyPage: history,
    presentationsPage: presentations
  },
  contactState: {
    dbInfo: false
  }
}
