/* eslint-disable import/no-cycle */
import { upload } from './app';

// функция, которая рисует превью картинок с сервера
export default function getImgs(urlImg) {
  const imgBox = document.createElement('div');
  imgBox.setAttribute('data-box', 'img');
  imgBox.innerHTML = `<img src="${urlImg}"><div data-del="img">X</div>`;
  upload.appendChild(imgBox);
}
