'use strict'
// Цепочки методов (чейнинг, chaining)


const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
    { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
  ];
  const MIN_BOOK_RATING = 8;
  // Пиши код ниже этой строки
  
  const names = books
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .sort((firstN, nextN) => firstN.localeCompare(nextN));



// Тесты
// Объявлена переменная books.
// Значение переменной books это исходный массив объектов.
// Объявлена переменная MIN_BOOK_RATING.
// Значение переменной MIN_BOOK_RATING это число 8.
// Объявлена переменная names.
// Значение переменной names это массив ['Бернард Корнуэлл', 'Говард Лавкрафт', 'Ли Танит', 'Роберт Шекли'].
// Нет объявленых переменных кроме books, MIN_BOOK_RATING и names.
// Используется цепочка методов filter, map, sort.