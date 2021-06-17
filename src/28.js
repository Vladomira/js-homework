'use strict'
// Метод some()
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(element => element %2 === 0);
const anyElementInFirstIsOdd = firstArray.some(element => element %2 !== 0);

const anyElementInSecondIsEven = secondArray.some(element => element %2 === 0);
const anyElementInSecondIsOdd = secondArray.some(element => element %2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(element => element %2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(element => element %2 !== 0);




// ===============
// Тесты
// Объявлена переменная firstArray.
// Значение переменной firstArray это массив [26, 94, 36, 18].
// Объявлена переменная secondArray.
// Значение переменной secondArray это массив [17, 61, 23].
// Объявлена переменная thirdArray.
// Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18].
// Объявлена переменная anyElementInFirstIsEven.
// Значение переменной anyElementInFirstIsEven это буль true.
// Объявлена переменная anyElementInFirstIsOdd.
// Значение переменной anyElementInFirstIsOdd это буль false.