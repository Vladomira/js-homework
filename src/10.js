'use strict'

// Метод map()

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map(planet => (planet.length));


// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => { return planet.length;});



// Тесты
// Объявлена переменная planets.
// Значение переменной planets это массив ['Земля', 'Марс', 'Венера', 'Юпитер'].
// Объявлена переменная planetsLengths.
// Значение переменной planetsLengths это массив [5, 4, 6, 6].
// Для перебора массива планет использован метод map().