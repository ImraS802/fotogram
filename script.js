let imagesCollection = [
  'architecture-3146263_640.jpg',
  'big-city-630140_640.jpg',
  'broadway-3094717_640.jpg',
  'brooklyn-bridge-2575420_640.jpg',
  'brooklyn-bridge-2686294_640.jpg',
  'city-1868135_640.jpg',
  'empire-state-building-792315_640.jpg',
  'flatiron-246227_640.jpg',
  'museum-246223_640.jpg',
  'new-york-4030711_640.jpg',
  'new-york-833208_640.jpg',
  'new-york-926224_640.jpg',
  'statue-of-liberty-6693960_640.jpg',
];

let titlesCollection = [
  'Brooklyn Bridge close up',
  'NY skyscrapers',
  'Broadway',
  'Brooklyn Bridge from a far',
  'Brooklyn Bridge at night',
  'NY skyline at night with Hudson River',
  'NY skyline',
  'The Flat Iron',
  'Guggenheim Museum',
  'Empire State Building',
  'Skyscraper window mirror',
  'NY from above',
  'The Statue of Liberty',
];

function renderImages() {
  let showImg = document.getElementById('imgShown');

  for (let i = 0; i < imagesCollection.length; i++) {
    showImg.innerHTML += getNotesTemplateHtml(i);
  }
}

function getNotesTemplateHtml(index) {
  return `
    <div onclick="toggleOverlay()" class="single_element">
    <img src="./img/${imagesCollection[index]}" class="imagesNY" alt="Images of New York">
    <p class="titleText">${titlesCollection[index]}</p>
    </div>`;
}
