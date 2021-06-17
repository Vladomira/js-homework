'use strict'
// Сортировка объеков
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
  const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
  
  const sortedByAuthorName = [...books].sort((firstBook, lastBook) => 
    firstBook.author.localeCompare(lastBook.author));
  
  const sortedByReversedAuthorName = [...books].sort((firstBook, lastBook) =>
  lastBook.author.localeCompare(firstBook.author));
  
  const sortedByAscendingRating = [...books].sort((firstRate, lastRate) =>
   firstRate.rating - lastRate.rating);
  
  const sortedByDescentingRating = [...books].sort((firstRate, lastRate) => 
  lastRate.rating - firstRate.rating);
  
  










// ===========
// Тесты
// Объявлена переменная books.
// Значение переменной books это исходный массив объектов книг.
// Объявлена переменная sortedByAuthorName.
// Значение переменной sortedByAuthorName это массив книг отсортированный по имени автора в алфавитном порядке.
// Объявлена переменная sortedByReversedAuthorName.
// Значение переменной sortedByReversedAuthorName это массив книг отсортированный по имени автора в обратном алфавитном порядке.
// Объявлена переменная sortedByAscendingRating.
// Значение переменной sortedByAscendingRating это массив книг отсортированный по возрастанию рейтинга.