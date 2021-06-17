'use strict'
// Свой порядок сортировки чисел
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = 
[...releaseDates].sort((first, second) => first - second);

const descendingReleaseDates =
 [...releaseDates].sort((first, second) => second- first);









// ====================
// Тесты
// Объявлена переменная releaseDates.
// Значение переменной releaseDates это массив [2016, 1967, 2008, 1984, 1973, 2012, 1997].
// Объявлена переменная ascendingReleaseDates.
// Значение переменной ascendingReleaseDates это массив [1967, 1973, 1984, 1997, 2008, 2012, 2016].
// Объявлена переменная descendingReleaseDates.
// Значение переменной descendingReleaseDates это массив [2016, 2012, 2008, 1997, 1984, 1973, 1967].
// Использован метод sort().