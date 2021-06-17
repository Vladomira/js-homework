'use strict'
// Чистые функции

function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  const arrayOfEven = [];
  
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] % 2 === 0) {         
        arrayOfEven.push(numbers[i] + value)
      } if (numbers[i] % 2 !== 0) {         
        arrayOfEven.push(numbers[i]);
      
      };
    }
    
    return arrayOfEven;
  
}
 
// Тесты
// Объявлена функция changeEven(numbers, value).
// Функция changeEven не изменяет значение параметра numbers.
// Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5].
// Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16].
// Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142].
// Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.