'use strict'

const getSortedFriends = users => 
   [...users] 
.map (user => user.friends)
.flatMap((friend) => friend)
.sort((fN, sN) => fN.localeCompare(sN))
  .filter((name, index, arr) => arr.indexOf(name) === index);


//   const getSortedFriends = (users) => {
//     const friends = [...users]
//       .flatMap((friend) => friend.friends)
//       .filter((name, index, array) => array.indexOf(name) === index)
//       .sort((a, b) => a.localeCompare(b));
  
//     return friends;
//   };

//   Задание
// Дополни функцию getSortedFriends(users) так,
//  чтобы она возвращала массив уникальных имён друзей
//  (свойство friends) отсортированный по алфавиту .


// Тесты
// Объявлена переменная getSortedFriends.
// Переменной getSortedFriends присвоена стрелочная функция с параметром (users).
// В теле функции используется цепочка методов в правильном порядке.
// Значение параметра users не изменяется.
// Вызов функции с указанным массивом пользователей возвращает массив ['Adrian Cross', 'Aisha Tran', 'Briana Decker', 'Eddie Strong', 'Goldie Gentry', 'Jacklyn Lucas', 'Jordan Sampson', 'Linda Chapman', 'Marilyn Mcintosh', 'Naomi Buckner', 'Padilla Garrison', 'Sharron Pace', 'Solomon Fokes'].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.