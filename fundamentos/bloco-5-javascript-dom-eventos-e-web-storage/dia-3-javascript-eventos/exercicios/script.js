function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1:
function addDaysOfTheMonth () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysContainer = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const dayDez = dezDaysList[index];
    const dayMonthItem = document.createElement('li');
    dayMonthItem.style.height = '50px';
    dayMonthItem.className = 'day';

    const holidayList = [24, 25, 31];
    for (let holiday of holidayList) {
      if (dezDaysList[index] === holiday) {
        dayMonthItem.classList.add('holiday');
      }
    }

    const fridayList = [4, 11, 18, 25];
    for (let friday of fridayList) {
      if (dezDaysList[index] === friday) {
        dayMonthItem.classList.add('friday');
      }
    }

    dayMonthItem.innerHTML = dayDez;

    daysContainer.appendChild(dayMonthItem);
  }
}

addDaysOfTheMonth();

// Exercício 2:
function createHolidaysButton (str) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const btnHoliday = document.createElement('button');
  btnHoliday.innerText = str;
  btnHoliday.id = 'btn-holiday';

  buttonsContainer.appendChild(btnHoliday);
}

createHolidaysButton('Feriados')

// Exercício 3:
const btnHoliday = document.querySelector('#btn-holiday');
btnHoliday.addEventListener('click', togglesColorForHolidays);

function togglesColorForHolidays () {
  const daysHoliday = document.getElementsByClassName('holiday');

  for (let day of daysHoliday) {
    if (day.style.backgroundColor === 'white') {
      day.style.backgroundColor = "rgb(238,238,238)";
    } else {
      day.style.backgroundColor = 'white';
    }
  }
}

// Exercício 4:
function createFridaysButton (str) {
  const buttonsContainer = document.querySelector('.buttons-container');
  const btnFriday = document.createElement('button');
  btnFriday.innerText = str;
  btnFriday.id = 'btn-friday';

  buttonsContainer.appendChild(btnFriday);
}

createFridaysButton('Sexta-feira');

// Exercício 5:
const btnFriday = document.querySelector('#btn-friday');
btnFriday.addEventListener('click', togglesTextForFridayDays);
let days = [];

function togglesTextForFridayDays () {
  const daysFriday = document.getElementsByClassName('friday');

  let index = 0;
  for (let day of daysFriday) {
    if (day.innerText === 'SEXTOU!!') {
      day.innerText = days[index];
      index += 1;
    } else {
      days.push(day.innerText);
      day.innerText = 'SEXTOU!!';
    }
  }
}

// Exercício 6:
const items = document.getElementsByClassName('day');

function zoom () {
  for (let index = 0; index < items.length; index += 1) {
    items[index].addEventListener('mouseover', function (event) {
      event.target.style.fontSize = '2.2rem';
      event.target.style.marginTop = '-20px';
      event.target.style.backgroundColor = 'white';
      event.target.style.color = 'green';
    });
  }
  for (let index = 0; index < items.length; index += 1) {
    items[index].addEventListener('mouseleave', function (event) {
      event.target.style.fontSize = '1rem';
      event.target.style.marginTop = '0';
      event.target.style.backgroundColor = 'rgb(238,238,238)';
      event.target.style.color = '#666';
    });
  }
}

zoom();

// Exercício 7:
const myTasks = document.querySelector('.my-tasks');

function addTask (str) {
  const task = document.createElement('span');
  task.innerText = str

  myTasks.appendChild(task);
}

addTask('Cozinhar!');

// Exercício 8:
function addCaption (color) {
  const div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = color;

  myTasks.appendChild(div);
}

addCaption('green');

