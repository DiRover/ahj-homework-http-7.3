/* eslint-disable import/no-cycle */
import { form, url, preview } from './app';
import getImgs from './getImgs';

export default async function sendFile(e) {
  e.preventDefault();
  // если нет картинки для отправки выходим из функции
  if (!preview.innerHTML) return;
  const formData = new FormData();
  formData.append('file', e.currentTarget[0].files[0]); // получаем саму картинку
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });
  const result = await response.json();
  console.log(result);
  const urlImg = `${url}${result.elem}`;
  preview.innerHTML = '';
  getImgs(urlImg);
  form.reset();
}
