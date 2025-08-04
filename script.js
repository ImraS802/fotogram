'use strict';

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

let currentIndex = 0;

// renders images
function renderImages() {
  let showImg = document.getElementById('imgShown');

  for (let i = 0; i < imagesCollection.length; i++) {
    showImg.innerHTML += getTemplateHtml(i);
  }
}

// Accessibility: ab tabindex, um einzelne Bilder fokussierbar zu machen
function getTemplateHtml(index) {
  return `
    <div class="single_element">
    <img src="./img/${imagesCollection[index]}" class="imagesNY" id="imagesNY" alt="${titlesCollection[index]}" onclick="toggleOverlay(${index})" tabindex="0" onkeydown="if(event.key==='Enter' || event.key===' ') toggleOverlay(${index})">
    </div>`;
}

// Hintergrundkarte für geklicktes Bild, Öffungs- und Schließfunktion, wenn index passed in overlay mit Bild öffnet sich
function toggleOverlay(index = null) {
  // anfangs kein overlay da index = null
  let overlayRef = document.getElementById('overlay');
  let overlayImage = document.getElementById('overlayImage');
  let overlayTitle = document.getElementById('overlayTitle');

  // checken ob image index vorhanden wenn ja öffnet overlay
  if (index !== null) {
    currentIndex = index; // damit andere Funktionen exakt wissen welches Bild angezeigt werden soll
    overlayRef.classList.remove('d_none'); // overlay wird sichtbar
    overlayImage.src = `./img/${imagesCollection[currentIndex]}`;
    overlayTitle.textContent = titlesCollection[currentIndex]; // Titel setzen anhand von Index der angeklickt wurde

    document.addEventListener('keydown', escCloseOverlay); // Accessibility: Esc Taste um overlay zu schließen
  } else {
    overlayRef.classList.add('d_none');

    document.removeEventListener('keydown', escCloseOverlay); // Accessibility: Esc Tastenfunction wird wieder entfernt
  }
}

// Accessibility: overlay mit Tastatur schließen
function escCloseOverlay(event) {
  if (event.key === 'Escape') {
    toggleOverlay();
  }
}

// Pfeil-buttons zum navigieren zw. Bildern
function showNextImage() {
  currentIndex = (currentIndex + 1) % imagesCollection.length; // currentIndex = 0, bedeutet erstes Bild wird wieder angezeigt
  updateOverlayImagesAndTitles();
}

function showPreviousImage() {
  currentIndex =
    (currentIndex - 1 + imagesCollection.length) % imagesCollection.length; // + imagesCollection.length: addiert array-Länge drauf um nicht negative Zahlen anzuzeigen;
  // currentIndex = 0;
  // (currentIndex - 1 + 13) % 13
  // = (-1 + 13) % 13
  // = 12 % 13
  // = 12 bleibt übrig
  updateOverlayImagesAndTitles();
}

function updateOverlayImagesAndTitles() {
  const overlayImage = document.getElementById('overlayImage');
  const overlayTitle = document.getElementById('overlayTitle');

  overlayImage.src = `./img/${imagesCollection[currentIndex]}`;
  overlayTitle.textContent = titlesCollection[currentIndex];
}
