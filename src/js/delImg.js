/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import { url } from './app';

const showFiles = document.querySelector('[data-srv="show-files"]');

// удаляем картинки с сервера
export default async function delImg(e) {
  const { target } = e;
  if (!target.hasAttribute('data-del')) return; // если не попали на крестик выходим
  showFiles.innerHTML = '';
  const parent = target.closest('[data-box="img"]'); // находим контейнер с картинкой и Х
  console.log(parent);
  const img = target.previousSibling; // находим картинку
  const src = img.getAttribute('src'); // получаем значение атрибута src
  console.log(src);
  const params = new URLSearchParams();
  params.append('src', src); // отправляем значение атрибута src на сервер
  const response = await fetch(url, {
    method: 'PATCH',
    body: params,
  });
  const result = await response.text();
  console.log(result);
  showFiles.innerHTML = result;
  /*const result = await response.json();
  console.log(result);
  result.forEach((picture) => {
    const pic = document.createElement('div');
    pic.innerHTML = picture;
    showFiles.appendChild(pic);
  });*/
  parent.remove(); // удаляем контейнер с картинкой и Х
}
