'use strict'
// Метод every()

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(evenEl => evenEl % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(evenEl => evenEl % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(evenEl => evenEl % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(evenEl => evenEl % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(evenEl => evenEl % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(evenEl => evenEl % 2 !== 0);


// =================
// Тесты
// Объявлена переменная firstArray.
// Значение переменной firstArray это массив [26, 94, 36, 18].
// Объявлена переменная secondArray.
// Значение переменной secondArray это массив [17, 61, 23].
// Объявлена переменная thirdArray.
// Значение переменной thirdArray это массив [17, 26, 94, 61, 36, 23, 18].
// Объявлена переменная eachElementInFirstIsEven.
// Значение переменной eachElementInFirstIsEven это буль true.
// Объявлена переменная eachElementInFirstIsOdd.
// Значение переменной eachElementInFirstIsOdd это буль false.
// Объявлена переменная eachElementInSecondIsEven.
// Значение переменной eachElementInSecondIsEven это буль false.
// Объявлена переменная eachElementInSecondIsOdd.
// Значение переменной eachElementInSecondIsOdd это буль true.
// Объявлена переменная eachElementInThirdIsEven.
// Значение переменной eachElementInThirdIsEven это буль false.
// Объявлена переменная eachElementInThirdIsOdd.
// Значение переменной eachElementInThirdIsOdd это буль false.
// Для перебора массивов использован метод every().