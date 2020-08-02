const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// Берём текущее время и создаем 3 переменных со значением часов, минут и секунд
var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log(`Hour: ${hr} Minute: ${min} Second: ${sec}`);

// Тут идёт расчет градусов для каждой стрелки в зависимости от текущего времени
let hrPosition = (hr * 360) / 12 + (min * (360 / 60)) / 12;
let minPosition = (min * 360) / 60 + (sec * (360 / 60)) / 60;
let secPosition = (sec * 360) / 60;

// Функция которая запускает весь скрипт каждую секунду для анимации
function runTheClock() {
  // эти три решения помогают отказаться от текущей функции времени и
  // расчитывают текущее положение стрелки после первого получения текущего времени
  hrPosition = hrPosition + 3 / 360;
  minPosition = minPosition + 6 / 60;
  secPosition = secPosition + 6;

  // даём нашим стрелкам перемещение в соответствии с ранее расчитаными углами
  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// запуск функции каждую секунду (1000мс)
var interval = setInterval(runTheClock, 1000);

//если отказаться от анимации стрелок, то можно упростить скрипт и переместить
// весь скрипт после первым трёх переменных в функцию, удалить
// расчеты внутри для уточнения времени без перменной со временем и уменьшить нагрузку на браузер
