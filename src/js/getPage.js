/* eslint-disable import/no-cycle */
import { url } from './app';
import getImgs from './getImgs';

export default async function getPage() {
  const response = await fetch(url, {
    method: 'GET',
  });
  const result = await response.json();
  result.forEach((element) => {
    const urlImg = `${url}${element}`;
    getImgs(urlImg);
  });
}
