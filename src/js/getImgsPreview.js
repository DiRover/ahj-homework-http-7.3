/* eslint-disable import/no-cycle */
import { preview } from './app';

export default function getImgsPreview(arr) {
  const files = Array.from(arr);
  files.forEach((element) => {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(element);
    console.log(img.src);
    preview.appendChild(img);
  });
}
