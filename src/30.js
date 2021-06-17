'use strict'
// Метод reduce()

const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244
  };
  const playtimes = Object.values(players); // [1270, 468, 710, 244]
  // Пиши код ниже этой строки
  
  const totalPlayTime = playtimes.reduce((acc, number) => {
  return acc + number}, 0);
  
  // Пиши код выше этой строки
  const averagePlayTime = totalPlayTime / playtimes.length;









// Тесты
// Объявлена переменная players.
// Значение переменной players это объект игроков с игровым временем каждого.
// Объявлена переменная playtimes.
// Значение переменной playtimes это массив [1270, 468, 710, 244].
// Объявлена переменная totalPlayTime.
// Значение переменной totalPlayTime это число 2692.
// Для перебора массива playtimes используется метод reduce().
// Объявлена переменная averagePlayTime.
// Значение переменной averagePlayTime это число 673.