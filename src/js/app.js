/* eslint-disable import/no-cycle */
/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
import getImgsPreview from './getImgsPreview';
import getImgs from './getImgs';
import sendFile from './sendFile';
import delImg from './delImg';

//получаем нужные эл-ты
const fileElem = document.querySelector('[data-id="file"]');
const overlap = document.querySelector('[data-id="overlap"]');
export const preview = document.querySelector('[data-id="preview"]');
export const upload = document.querySelector('[data-id="upload"]');
export const form = document.getElementById('form');
export const url = 'http://localhost:7070/';

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
  getImgsPreview(e.target.files);
});

overlap.addEventListener('dragover', (e) => {
  e.preventDefault();
});

overlap.addEventListener('drop', (e) => {
  e.preventDefault();
  console.log(e.dataTransfer.files);
  getImgs(e.dataTransfer.files);
});
