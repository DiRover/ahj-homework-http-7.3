/* eslint-disable spaced-comment */
/* eslint-disable no-console */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
//получаем нужные эл-ты
const fileElem = document.querySelector('[data-id="file"]');
const overlap = document.querySelector('[data-id="overlap"]');
const previewContainer = document.querySelector('[data-id="preview"]');
const imgTest = document.querySelector('.img-test');
const form = document.getElementById('form');
const url = 'http://localhost:7070/';
const xhr = new XMLHttpRequest();
let data;

form.addEventListener('submit', fnFetch);



async function fnFetch(e) {
  e.preventDefault();
  console.log(e.currentTarget[0].files[0]);
  const formData = new FormData();
  formData.append('file', e.currentTarget[0].files[0]);
  const response = await fetch(url, {
    method: 'POST',
    body: formData
  });
  const result = await response.text();
  imgTest.src = `${url}${result}`
  console.log(`${url}${result}`);
}












/*
function fnFetch(e) {
  e.preventDefault();
  const formData = new FormData();
  formData.append('file', e.currentTarget[0].files[0]);
  xhr.open('POST', url);
  xhr.send(formData);
  xhr.onload = () => {
    console.log(xhr.response);
    imgTest.src = `http://localhost:7070/${xhr.response}`;
    //const data = JSON.parse(this.responseText);
    //console.log(data);
  }
};*/





/*
fileElem.addEventListener('change', getFile);

function getFile(e) {
  data = e.target.files[0];
  console.log(data);
  const reader = new FileReader();
  reader.onload = (event) => {
    img = event.target.result;
  };
  reader.readAsDataURL(data);
}
*/






















//передаём клик с перекрывающего элемента на нижележащий инпут
overlap.addEventListener('click', () => {
  fileElem.dispatchEvent(new MouseEvent('click'));
});
//функция, которая рисует превью картинок
function getImgs(arr) {
  const files = Array.from(arr);
  files.forEach((element) => {
    //чтобы загружать подряд две одинаковые картинки
    //fileElem.value = null;
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
