/* eslint-disable no-unused-vars */
/* eslint-disable import/no-cycle */
import { url } from './app';

// удаляем картинки с сервера
export default async function delImg(e) {
  const { target } = e;
  if (!target.hasAttribute('data-del')) return; // если не попали на крестик выходим
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
  parent.remove(); // удаляем контейнер с картинкой и Х
}
