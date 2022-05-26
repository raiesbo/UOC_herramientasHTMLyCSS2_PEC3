/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */

const daysTag = document.querySelector('.days__time');
const hoursTag = document.querySelector('.hours__time');
const minutesTag = document.querySelector('.min__time');
const secondsTag = document.querySelector('.sec__time');

const timeHandler = () => {
  let lastDay = new Date('2022-07-08');
  let now = new Date();

  const diffTime = lastDay - now
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

  daysTag.textContent = diffDays;
  hoursTag.textContent = ensureDoubleDigit(diffHours);
  minutesTag.textContent = ensureDoubleDigit(diffMinutes);
  secondsTag.textContent = ensureDoubleDigit(diffSeconds);
}

const ensureDoubleDigit = (num) => {
  return num < 10 ? `0${num}` : num;
};

setInterval(() => {
  timeHandler();
}, 1000);