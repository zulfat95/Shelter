import { dogsInJSON } from "./modal.js";


let newDogs = [...dogsInJSON];
// console.log(newDogs)
const pageEl = document.querySelector('.page');
// const amountOfElements = 48;
// let countOfChildrens = document.querySelector('.section-pets__slider-cats-container').children.length;
// console.log(document.querySelector('.section-pets__slider-cats-container').children.length)
// const countOfPages = amountOfElements / countOfChildrens;
let countOfPages;

const container = document.querySelector('.section-pets__slider-cats-container');
const arrowLeftButton = document.querySelector('.arrow-left');
const twoArrowLeftButton = document.querySelector('.two-arrow-left');
const arrowRightButton = document.querySelector('.arrow-right');
const twoArrowRightButton = document.querySelector('.two-arrow-right');

let number = +pageEl.dataset.value;


const renderElements = (parent, elements) => {
  parent.innerHTML = '';
  parent.insertAdjacentHTML('beforeend', elements);
}

function shuffle(array) {
  let mixedArray = [...array];
  let currentIndex = mixedArray.length, temporaryValue, randomIndex;
  
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
 
    // And swap it with the current element.
    temporaryValue = mixedArray[currentIndex];
    mixedArray[currentIndex] = mixedArray[randomIndex];
    mixedArray[randomIndex] = temporaryValue;
  }
  return mixedArray;
}

let allMixedElements = {
  1: newDogs,
  2: shuffle(newDogs),
  3: shuffle(newDogs),
  4: shuffle(newDogs),
  5: shuffle(newDogs),
  6: shuffle(newDogs)
}
// console.log(newDogs)
// console.log(allMixedElements[1]);

// let firstElement = shuffle(newDogs);
// let secondElement = shuffle(newDogs);
// let thirdElement = shuffle(newDogs);
// let fourthElement = shuffle(newDogs);
// let fifthElement = shuffle(newDogs);
// let sixthElement = shuffle(newDogs);

// console.log(allMixedElements);

// console.log(shuffle(newDogs));
// console.log(newDogs[3].name);

const getMixedObjects = () => {
  // return shuffle(objects);
}

const getCollect = (obj,pageNumber) => {
  // let target = obj.target.dataset;
  if (pageNumber === 8) {
    ;
  }
  console.log(pageNumber);
  let result = '';
  for (let i = 0; i < obj[pageNumber].length; i++) {
    // console.log(i)
    console.log(pageNumber)
    result += `<div class="section-pets__slider-cat" data-name="${obj[pageNumber][i].name.toLowerCase()}">
<div class="section-pets__slider-cat-image-${obj[pageNumber][i].name.toLowerCase()}"></div>
<h4 class="section-pets__slider-cat-h4">${obj[pageNumber][i].name}</h4>
<button class="section-pets__slider-cat-button">
  <span class="section-pets__slider-cat-button-text">Learn more</span>
</button>
</div>`
  }
  return result;
}

const elements = `<div class="section-pets__slider-cat" data-name="katrine">
<div class="section-pets__slider-cat-image-katrine"></div>
<h4 class="section-pets__slider-cat-h4">Katrine</h4>
<button class="section-pets__slider-cat-button">
  <span class="section-pets__slider-cat-button-text">Learn more</span>
</button>
</div>

<div class="section-pets__slider-cat" data-name="jennifer">
<div class="section-pets__slider-cat-image-jennifer"></div>
<h4 class="section-pets__slider-cat-h4">Jennifer</h4>
<button class="section-pets__slider-cat-button">
  <span class="section-pets__slider-cat-button-text">Learn more</span>
</button>
</div>

<div class="section-pets__slider-cat" data-name="woody">
<div class="section-pets__slider-cat-image-woody"></div>
<h4 class="section-pets__slider-cat-h4">Woody</h4>
<button class="section-pets__slider-cat-button">
  <span class="section-pets__slider-cat-button-text">Learn more</span>
</button>
</div>

<div class="section-pets__slider-cat" data-name="sophia">
<div class="section-pets__slider-cat-image-sophia"></div>
<h4 class="section-pets__slider-cat-h4">Sophia</h4>
<button class="section-pets__slider-cat-button">
  <span class="section-pets__slider-cat-button-text">Learn more</span>
</button>
</div>

<div class="section-pets__slider-cat" data-name="timmy">
<div class="section-pets__slider-cat-image-timmy"></div>
<h4 class="section-pets__slider-cat-h4">Timmy</h4>
<button class="section-pets__slider-cat-button">
  <span class="section-pets__slider-cat-button-text">Learn more</span>
</button>
</div>

<div class="section-pets__slider-cat" data-name="charly">
<div class="section-pets__slider-cat-image-charly"></div>
<h4 class="section-pets__slider-cat-h4">Charly</h4>
<button class="section-pets__slider-cat-button">
  <span class="section-pets__slider-cat-button-text">Learn more</span>
</button>
</div>

<div class="section-pets__slider-cat" data-name="scarlett">
<div class="section-pets__slider-cat-image-scarlett"></div>
<h4 class="section-pets__slider-cat-h4">Scarlett</h4>
<button class="section-pets__slider-cat-button">
  <span class="section-pets__slider-cat-button-text">Learn more</span>
</button>
</div>

<div class="section-pets__slider-cat" data-name="freddie">
<div class="section-pets__slider-cat-image-freddie"></div>
<h4 class="section-pets__slider-cat-h4">Freddie</h4>
<button class="section-pets__slider-cat-button">
  <span class="section-pets__slider-cat-button-text">Learn more</span>
</button>
</div>`


const getCountOfPages = () => {
  if (screen.width >= 769) {
    return countOfPages = 6;
  }
  if (screen.width <= 768 && screen.width > 320) {
    return countOfPages = 8;
  }
  if (screen.width <= 320) {
    return countOfPages = 16;
  }

}
getCountOfPages();
console.log(`countofpages: ${countOfPages}`)

const activeLeftButton = () => {
  if (number !== 1) {
    arrowLeftButton.classList.remove('inactive');
    arrowLeftButton.classList.add('active')
    twoArrowLeftButton.classList.remove('inactive')
    twoArrowLeftButton.classList.add('active')
  }
  else {
    arrowLeftButton.classList.remove('active');
    arrowLeftButton.classList.add('inactive')
    twoArrowLeftButton.classList.remove('active')
    twoArrowLeftButton.classList.add('inactive')
  }
}

const activeRightButton = () => {
  if (number !== countOfPages) {
    arrowRightButton.classList.remove('inactive');
    arrowRightButton.classList.add('active')
    twoArrowRightButton.classList.remove('inactive')
    twoArrowRightButton.classList.add('active')
  }
  else {
    arrowRightButton.classList.remove('active');
    arrowRightButton.classList.add('inactive')
    twoArrowRightButton.classList.remove('active')
    twoArrowRightButton.classList.add('inactive')
  }
}



arrowRightButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  // console.log(+pageEl.dataset.value + 1);
  if (number === countOfPages) {
    return;
  }
  pageEl.innerText = ++number;
  pageEl.dataset.value = number;
  activeLeftButton()
  activeRightButton()
  let readyElements = getCollect(allMixedElements, number);
  renderElements(container, readyElements);
})

twoArrowRightButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  pageEl.innerText = countOfPages;
  number = countOfPages;
  console.log(countOfPages)
  pageEl.dataset.value = number;
  activeLeftButton()
  activeRightButton()
  let readyElements = getCollect(allMixedElements, number);
  renderElements(container, readyElements);
})

arrowLeftButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (number === 1) {
    return;
  }
  pageEl.innerText = --number;
  pageEl.dataset.value = number;
  activeLeftButton()
  activeRightButton()
  let readyElements = getCollect(allMixedElements, number);
  renderElements(container, readyElements);
})

twoArrowLeftButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  pageEl.innerText = 1;
  number = 1;
  pageEl.dataset.value = number;
  console.log(number)
  activeLeftButton()
  activeRightButton()
  let readyElements = getCollect(allMixedElements, number);
  renderElements(container, readyElements);
})