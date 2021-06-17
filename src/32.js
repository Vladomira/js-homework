'use strict'
// Задача. Общий баланс пользователей


const calculateTotalBalance = users => {
    return users.reduce((totalBalance, user) => 
  { return totalBalance += user.balance}, 0); 
     
  };

// вариант Вадима
// const calculateTotalBalance = users => {
//     const totalSum = users.reduce((total, user) => {
//       return total + user.balance;
//     }, 0);
//     return totalSum;
//   };  



// ================
// Тесты
// Объявлена переменная calculateTotalBalance.
// Переменной calculateTotalBalance присвоена стрелочная функция с параметром (users).
// Для перебора параметра users используется метод reduce().
// Вызов функции с указанным массивом пользователей возвращает число 20916.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.