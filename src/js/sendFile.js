/* eslint-disable import/no-cycle */
import { form, url } from './app';
import getImgs from './getImgs';

export default async function sendFile(e) {
  const formData = new FormData();
  formData.append('file', e); // получаем саму картинку
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });
  const result = await response.json();
  console.log(result);
  const urlImg = `${url}${result.elem}`;
  getImgs(urlImg);
  form.reset();
}
