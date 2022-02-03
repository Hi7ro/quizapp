let images = [
  './img/img1.jpg', './img/img2.jpg', './img/img3.jpg', './img/img4.jpg',
  './img/img5.jpg', './img/img6.jpg', './img/img7.jpg', './img/img8.jpg',
  './img/img9.jpg', './img/img10.jpg', './img/img11.jpg', './img/img12.jpg',
  './img/img13.jpg', './img/img14.jpg', './img/img15.jpg', './img/img16.jpg',
  './img/img17.jpg', './img/img18.jpg', './img/img19.jpg', './img/img20.jpg',
  './img/img21.jpg'
];

let imgContainer = document.getElementById('image-container');
let bigScreen = document.getElementById('bigScreen');
let symbols = document.getElementById('bigScreenSymbols')

function renderImages() {

  for (let i = 0; i < images.length; i++) {
    imgContainer.innerHTML += `
        <div class="img-box">
          <img onclick="openImg(${i})" src="${images[i]}">
        </div>
      `;
  }
};

function openImg(i) {
  imgContainer.parentNode.classList.add('d-none');
  bigScreen.classList.remove('d-none');

  bigScreen.innerHTML += `
  <div class="bigSreenImg">
  <img src="${images[i]}">
  </div>
  
`;
}

function closeImg() {}

function previousImg() {}

function nextImg() {}
// let column1 = document.getElementsByClassName('photos_column')[0];
// let column2 = document.getElementsByClassName('photos_column')[1];
// let column3 = document.getElementsByClassName('photos_column')[2];
// let x = window.matchMedia('(max-width: 900px)');

// function renderImages(){

//   columnQuery(x)
// } 

// function columnQuery(x){
//   if(x.matches){
//     column3.classList.add('d-none');
//     for(let i=0; i < images.length; i++) {

//       column1.innerHTML += `
//       <div class="img-box">
//         <img src="${images[i]}">
//       </div>`;
//       i++;
//     }
//     for(let i=1; i < images.length; i++){
//       column2.innerHTML += `
//       <div class="img-box">
//         <img src="${images[i]}">
//       </div>`;
//       i++;
//   }
// }else{
//   column3.classList.remove('d-none');

//   for(let i=0; i < images.length; i++) {

//     column1.innerHTML += `
//     <div class="img-box">
//       <img src="${images[i]}">
//     </div>`;
//     i = i + 2;

//   }

//   for(let i=1; i < images.length; i++){
//     column2.innerHTML += `
//     <div class="img-box">
//       <img src="${images[i]}">
//     </div>`;
//     i = i + 2;
//   }

//   for(let i=2; i < images.length; i++){
//     column3.innerHTML += `
//     <div class="img-box">
//       <img src="${images[i]}">
//     </div>`;
//     i = i + 2;
//   }

// }
// };