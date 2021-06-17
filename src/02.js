'use strict'

// Задача. Фильтрация массива чисел
function filterArray(numbers, value) {
    const filteredNumbers = [];
     
  numbers.forEach(num => {
    if (num > value)
  filteredNumbers.push(num);
  }); 
  
    return filteredNumbers;
  }

//======================= 
  //тернарник
  function filterArray(numbers, value) {
    const filteredNumbers = [];
  
  numbers.forEach(num => {
   num > value ? 
  filteredNumbers.push(num) : filteredNumbers;
  });
  
    return filteredNumbers;
  }