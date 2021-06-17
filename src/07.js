'use strict'
// Задача. Фильтрация массива чисел 2.0

// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach(number => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
  }