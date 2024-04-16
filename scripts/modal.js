export let dogsInJSON = [
  {
    "name": "Katrine",
    "img": "assets/img/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Jennifer",
    "img": "assets/img/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "assets/img/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "assets/img/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "assets/img/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "assets/img/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  },
  {
    "name": "Scarlett",
    "img": "assets/img/pets-scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "assets/img/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
];

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const sectionPetsContainer = document.querySelector('.section-pets__slider-cats-container');
const closeButton = document.querySelector('.close-button');
const modalPopup = document.querySelector('.modal-popup');

const addChildElementsFromString = (parent, domString) => {
  parent.innerHTML = '';
  parent.insertAdjacentHTML('beforeend', domString);
}

const createModalWindow = ({name, img, type, breed, description, age, inoculations, diseases, parasites}) => {
  return `<div class="modal-content_image_block">
  <img class="modal-content_image_block-img" width="500" height="500" src="${img}" alt="${name}-image">
  </div>
  <div class="modal-content_about">
  <h3 class="modal-content_about-name">${name}</h3>
  <h3 class="modal-content_about-type">${type} - ${breed}</h3>
  <h5 class="modal-content_about-description">${description}</h5>
  <ul class="modal-content_about-ul">
    <li class="modal-content_about-li"><b>Age:</b> ${age}</li>
    <li class="modal-content_about-li"><b>Inoculations:</b> ${inoculations.join(', ')}</li>
    <li class="modal-content_about-li"><b>Diseases:</b> ${diseases.join(', ')}</li>
    <li class="modal-content_about-li"><b>Parasites:</b> ${parasites.join(', ')}</li>
  </ul>
  </div>`
}

const itemClickHandler = (evt) => {
  const element = evt.target.closest('.section-pets__slider-cat');
  
  if (!element) {
    return;
  }
  evt.preventDefault();

  const {name} = element.dataset;

  const modalGroup = dogsInJSON.filter((item) => item.name.toLowerCase() === name)[0];
  if (modalGroup) {
    const modalItem = createModalWindow(modalGroup);
    addChildElementsFromString(modalContent, modalItem);
    modal.classList.add('shown');
    document.body.style.overflow = 'hidden';
  }
}

const modalCloseButtonClickHandler = (evt) => {
  const el = evt.target.closest('.modal-popup');
  if (el !== modalPopup || evt.target === closeButton) {
    modal.classList.remove('shown');
    document.body.style.overflow = '';
  }
}

const render = () => {
  sectionPetsContainer.addEventListener('click', itemClickHandler);
  modal.addEventListener('click', modalCloseButtonClickHandler)
}

render();