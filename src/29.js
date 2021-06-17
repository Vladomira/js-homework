'use strict'
// Задача. Есть ли активные пользователи

const isAnyUserActive = users => 
users.some(user => user.isActive);



// ===========
// Тесты
// Объявлена функция isAnyUserActive(users).
// Для перебора параметра users используется метод some().
// Вызов функции с указанным массивом пользователей возвращает true.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.