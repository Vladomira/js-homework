'use strict'
// Метод reduce() и массив объектов

const players = [
    { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
    { name: 'Поли', playtime: 469, gamesPlayed: 2 },
    { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
    { name: 'Киви', playtime: 241, gamesPlayed: 1 },
  ];
  // Пиши код ниже этой строки
  
  const totalAveragePlaytimePerGame = players.reduce((time, player) =>
  {return player.playtime / player.gamesPlayed + time}, 0);
  





// ==============
// \Тесты
// Объявлена переменная players.
// Значение переменной players это массив объектов игроков.
// Объявлена переменная totalAveragePlaytimePerGame.
// Значение переменной totalAveragePlaytimePerGame это число 1023.
// Для перебора массива players используется метод reduce().