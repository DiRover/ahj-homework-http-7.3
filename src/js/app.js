/* eslint-disable import/no-cycle */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
import getImgs from './getImgs';
import sendFile from './sendFile';
import delImg from './delImg';
import getPage from './getPage';

//получаем нужные эл-ты
const fileElem = document.querySelector('[data-id="file"]');
const overlap = document.querySelector('[data-id="overlap"]');
export const upload = document.querySelector('[data-id="upload"]');
export const form = document.getElementById('form');
export const url = 'https://http-herocu-pictures.herokuapp.com/';
//export const url = 'http://localhost:7070/';

//получаем картиники давно хранящиеся на сервере
document.addEventListener('DOMContentLoaded', getPage);

//отправляем картинку на сервер
form.addEventListener('submit', sendFile);

//удаляем картинку
upload.addEventListener('click', delImg);

//передаём клик с перекрывающего элемента на нижележащий инпут
overlap.addEventListener('click', () => {
  fileElem.dispatchEvent(new MouseEvent('click'));
});

//отрисовываем превью картинок перед отправкой
fileElem.addEventListener('change', (e) => {
  sendFile(e.target.files[0]);
});

overlap.addEventListener('dragover', (e) => {
  e.preventDefault();
});

overlap.addEventListener('drop', (e) => {
  e.preventDefault();
  getImgs(e.dataTransfer.files);
});
