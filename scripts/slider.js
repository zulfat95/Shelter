let position = 0;

const container = document.querySelector('.section-pets__slider-cats-container');
const sliderTrack = document.querySelector('.section-pets__slider-cats-container_block');
const item = document.querySelectorAll('.section-pets__slider-cat');
const rightButton = document.querySelectorAll('.section-pets__slider-switcher')[1];
const leftButton = document.querySelectorAll('.section-pets__slider-switcher')[0];

const oneItemWidth = 270; // Ширина одного элемента

let amountOfItemsInClientWidth = Math.floor(container.clientWidth / oneItemWidth); // количество item в clientWidth
let oneGapWidthBetweenItems = (container.clientWidth - (amountOfItemsInClientWidth * 270)) / (amountOfItemsInClientWidth - 1) || 0; // ширина одного gap 
let slidesToScroll = amountOfItemsInClientWidth; // на сколько эл-в слайдить
// console.log(oneGapBetweenElements || 0);
// console.log(item.length);

let movePosition; // На какое расстояние двигать слайд
let sliderTrackoffsetWidth = sliderTrack.offsetWidth; // Ширина всего полотна(слайдера)
// console.log((amountOfItemsInClientWidth * oneItemWidth) + (oneGapWidthBetweenItems * amountOfItemsInClientWidth))

// const checkLeftButton = () => {
//   if (position == 0) {
//     return movePosition = 0;
//     // console.log(`Position 0: ${position}`)
//   }
// }

const calculateRightButton = () => {
  slidesToScroll = amountOfItemsInClientWidth;
  if (Math.abs(position * slidesToScroll) > sliderTrackoffsetWidth) {
    slidesToScroll = Math.abs(Math.floor(sliderTrackoffsetWidth / Math.abs(position)));
    console.log(slidesToScroll)
    console.log(`moveposition in if ${movePosition}`)
    return movePosition = (slidesToScroll * oneItemWidth) + (oneGapWidthBetweenItems * (amountOfItemsInClientWidth - 1));
  }
  else {
    console.log(`moveposition in else ${movePosition}`)
    return movePosition = (amountOfItemsInClientWidth * oneItemWidth) + (oneGapWidthBetweenItems * amountOfItemsInClientWidth);
  }
}

const calculateLeftButton = () => {
  if (position === 0) {
    return;
  }
  if (Math.abs(position) >= 1080) {
    movePosition = 1080;
  }
  else {
    movePosition = ((amountOfItemsInClientWidth - 1) * oneItemWidth) + (oneGapWidthBetweenItems * (amountOfItemsInClientWidth - 1))
  }
  return movePosition;
}

rightButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  console.log(`Start right ${position}`)
  if (Math.abs(position) == 1800) {
    return;
  }
  calculateRightButton();
  position -= movePosition;
  sliderTrack.style.transform = `translateX(${position}px)`;
  console.log(`End right ${position}`)
})


leftButton.addEventListener('click', (evt) => {
  evt.preventDefault()
  console.log(`Start left ${position}`)
  if (!calculateLeftButton()) {
    return;
  }
  calculateLeftButton()
  position += movePosition;
  sliderTrack.style.transform = `translateX(${position}px)`;
  console.log(`End left ${position}`)
})





























// const calculate = () => {
//   return movePosition = (oneItemWidth * slidesToScroll) + (oneGapWidthBetweenItems * slidesToScroll);
// }

// calculate();

// const checkLeftButton = () => {
//   if (position == 0) {
//     movePosition = 0;
//     console.log(`Position 0: ${position}`)
//   }
// }

// const checkRightButton = () => {
//   // if (position <= -(item.length - slidesToShow) * oneItemWidth) {
//     if (position == -1800) {
//     console.log(position === -1800)
//     return movePosition = 0;
//   }
// }

// rightButton.addEventListener('click', (evt) => {
//   // if (checkRightButton()) {
//   //   return
//   // };
//   checkRightButton()
//   evt.preventDefault();
//   if (Math.abs(position) * slidesToScroll > sliderTrackoffsetWidth) {
//     // console.log(`SliderT: ${sliderTrackoffsetWidth}, position: ${position}`)
//     slidesToScroll = Math.abs(Math.floor(sliderTrackoffsetWidth / Math.abs(position)));
//     // console.log(slidesToScroll)
//     calculate();
//     checkRightButton()
//     position -= movePosition;
//     console.log(`Right button(if): ${position}`)
//   }
//   else {
//     slidesToScroll = 3;
//     position -= movePosition;
//     calculate();
//     console.log(`Right button(else): ${position}`);
//   }
//   sliderTrack.style.transform = `translateX(${position}px)`;
// })

// // TODO: Сделать позицию оставшихся элементов: по ним смотреть на сколько позиции 
// // делать слайд

// leftButton.addEventListener('click', (evt) => {
//   checkLeftButton();
//   evt.preventDefault();
//   if (Math.abs(position) * slidesToScroll > 1080) {
//     slidesToScroll = Math.abs(position) / (oneItemWidth + oneGapWidthBetweenItems);
//     console.log(slidesToScroll)
//     calculate();
//     position += movePosition;
//     console.log(`Left button(if): ${position}`)
//   }
//   else {
//     position += movePosition;
//     calculate()
//     console.log(`Left button(else): ${position}`);
//   }
//   sliderTrack.style.transform = `translateX(${position}px)`;
//   // console.log(position);
// })