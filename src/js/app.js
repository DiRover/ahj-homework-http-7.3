/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
//получаем нужные эл-ты
const fileElem = document.querySelector('[data-id="file"]');
const overlap = document.querySelector('[data-id="overlap"]');
const previewContainer = document.querySelector('[data-id="preview"]');
const form = document.getElementById('form');
const url = 'http://localhost:7070/';
const xhr = new XMLHttpRequest();

form.addEventListener('submit', fn);

function fn(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.currentTarget);
  xhr.open('POST', url);
  formData.append('file', fileElem.value)
  xhr.send(formData);
  xhr.onload = () => {
    console.log(xhr.response);
    /*const data = JSON.parse(this.responseText);
    console.log(data);*/
  }
}

/*xhr.addEventListener('load', () => {
  if (xhr.status >= 200 && xhr.status < 300) {
  const img = document.createElement('img');
  img.src = `http://localhost:7070/${xhr.response}`;
  console.log(xhr.response.body);
  console.log(img.src);
  //document.body.appendChild(img);
  }
});*/


async function fnF(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.currentTarget);
  const response = await fetch(url, {
    method: 'POST',
    body: formData
  });
  console.log(response);
  const result = await response.json();
  console.log(result);
}

























//передаём клик с перекрывающего элемента на нижележащий инпут
overlap.addEventListener('click', () => {
  fileElem.dispatchEvent(new MouseEvent('click'));
});
//функция, которая рисует превью картинок
function getImgs(arr) {
  const files = Array.from(arr);
  files.forEach((element) => {
    //чтобы загружать подряд две одинаковые картинки
    fileElem.value = null;
    const img = document.createElement('img');
    img.src = URL.createObjectURL(element);
    previewContainer.appendChild(img);
  });
}

fileElem.addEventListener('change', (e) => {
  getImgs(e.target.files);
});

overlap.addEventListener('dragover', (e) => {
  e.preventDefault();
});

overlap.addEventListener('drop', (e) => {
  e.preventDefault();
  console.log(e.dataTransfer.files);
  getImgs(e.dataTransfer.files);
});
