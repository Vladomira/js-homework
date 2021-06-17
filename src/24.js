'use strict'
// Метод find()

const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  ];
  const BOOK_TITLE = 'Сон смешного человека';
  const AUTHOR = 'Роберт Шекли';
  // Пиши код ниже этой строки
  
  const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
  const bookByAuthor = books.find(book => book.author === AUTHOR);
  




// ==============
// Тесты
// Объявлена переменная books.
// Значение переменной books это массив.
// Объявлена переменная BOOK_TITLE.
// Значение переменной BOOK_TITLE это строка 'Сон смешного человека'.
// Объявлена переменная AUTHOR.
// Значение переменной AUTHOR это строка 'Роберт Шекли'.
// Объявлена переменная bookWithTitle.
// Значение переменной bookWithTitle это объект книги с названием выше 'Сон смешного человека'.
// Объявлена переменная bookByAuthor.
// Значение переменной bookByAuthor это объект книги автора 'Роберт Шекли'.
// Для перебора массива books использован метод find().