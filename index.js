const homeEl = document.querySelector('.home-el');
const guestEl = document.querySelector('.guest-el');

let homeScore = 0;
let guestScore = 0;

function addoneHome() {
  homeScore += 1;
  homeEl.textContent = homeScore;
}

function addtwoHome() {
  homeScore += 2;
  homeEl.textContent = homeScore;
}

function addthreeHome() {
  homeScore += 3;
  homeEl.textContent = homeScore;
}

function addoneGuest() {
  guestScore += 1;
  guestEl.textContent = guestScore;
}

function addtwoGuest() {
  guestScore += 2;
  guestEl.textContent = guestScore;
}

function addthreeGuest() {
  guestScore += 3;
  guestEl.textContent = guestScore;
}

function reset() {
  homeScore = 0;
  guestScore = 0;

  guestEl.textContent = guestScore;
  homeEl.textContent = homeScore;
}

// if (homeScore > guestScore) {
//   homeEl.style.border = '2px solid green';
// } else if (guestScore > homeScore) {
//   guestEl.style.border = '2px solid green';
// }
