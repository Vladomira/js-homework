'use strict'
// Свой порядок сортировки строк

const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  // Пиши код ниже этой строки
  
  const authorsInAlphabetOrder = [...authors].sort((first, second) => first.localeCompare(second));
  
  const authorsInReversedOrder = [...authors].sort((first, second) => second.localeCompare(first));
  



// ============
// Тесты
// Объявлена переменная authors.
// Значение переменной authors это массив ['Ли Танит', 'Бернард Корнуэлл', 'Роберт Шекли', 'Федор Достоевский', 'Говард Лавкрафт'].
// Объявлена переменная authorsInAlphabetOrder.
// Значение переменной authorsInAlphabetOrder это массив ['Бернард Корнуэлл', 'Говард Лавкрафт', 'Ли Танит', 'Роберт Шекли', 'Федор Достоевский'].
// Объявлена переменная authorsInReversedOrder.
// Значение переменной authorsInReversedOrder это массив ['Федор Достоевский', 'Роберт Шекли', 'Ли Танит', 'Говард Лавкрафт', 'Бернард Корнуэлл'].
// Использован метод sort().