const el_hour = document.querySelector('.hour');
const el_minute = document.querySelector('.minute');
const el_second = document.querySelector('.second');
const btn_start = document.querySelector('.btn_start');
const btn_stop = document.querySelector('.btn_stop');
const btn_reset = document.querySelector('.btn_reset');

let hour = 0;
let minute = 0;
let second = 0;

function numFormat(num) {
  if (num < 10) return `0${num}`;
  return `${num}`;
}

function setElements(h, m, s) {
  el_hour.innerHTML = numFormat(h);
  el_minute.innerHTML = numFormat(m);
  el_second.innerHTML = numFormat(s);
}

setElements(hour, minute, second);
let timer = 0;

btn_start.addEventListener('click', () => {
  timer = setInterval(() => {
    second++;
    if (second == 60) {
      minute++;
      second = 0;
      if (minute == 60) {
        hour++;
        minute = 0;
      }
    }
    setElements(hour, minute, second);
  }, 1000);
  btn_start.classList.add('hide');
  btn_stop.classList.remove('hide');
});

btn_stop.addEventListener('click', () => {
  clearInterval(timer);
  btn_stop.classList.add('hide');
  btn_start.classList.remove('hide');
});

btn_reset.addEventListener('click', () => {
  clearInterval(timer);
  hour = 0;
  minute = 0;
  second = 0;
  setElements(hour, minute, second);
  btn_stop.classList.add('hide');
  btn_start.classList.remove('hide');
});