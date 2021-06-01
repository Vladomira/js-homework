'use strict';

// callback-функция: https://www.youtube.com/watch?v=_wcFovNQTWU

// const fnA = function (massage, callback) {
// console.log(massage);

// console.log(callback);
// callback(100);
// };

// const fnB = function(number){
//     console.log('Это лог при вызове fnB', number);
// };
// fnA('qweqwe', fnB);


// const doMath = function (a, b, callback) {
//  const result = callback(a, b);

//  console.log(result);
// };


// // const add = function(x, y){
// //     return x + y;
// // };
// const sub = function(x, y){
//     return x - y;
// };

// doMath(2, 3, function(x, y){
//     return x + y;
// });
// doMath(10, 8, sub);



// exercises
// ***
// 1 добавить слушателя событий/егистрация событий
// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//     console.log('Клик по кнопке');
// }

// buttonRef.addEventListener('click', handleBtnClick);

// function addEventListener(eventType, callback){
//     if(eventType === event){
//         callback();
//     }
// };


// ****
// 2 получение геолокаации пользователя
// const onGetPositionSucsess = function(position){
//     console.log('это вызов onGetPositionSucsess');
//     console.log(position);
// }

// const onGetPositionError = function(error){
//     console.log('это вызов onGetPositionError');
//     console.log(error);
// }

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSucsess, onGetPositionError,
// );


// ****
// #3 отложенны   вызов: интервалы
// const callback = function() {
//     console.log('Через 2 секунды внутри колбека в таймауте');
// };

// console.log('В коде перед таймаутом'); 
// setTimeout(callback, 2000);
// console.log('В коде после таймаутом');


// *****
// #4 работа с бэкендом
// const onRequestSucsess = function (response){
//     console.log(
//         'Вызов функции onRequestSucsess после успешного ответа бэкенда',
//         );
//     console.log(response);
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
// .then(res => res.json()
// .then(onRequestSucsess));


// ****
// #5 фильтрация массивов 
// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const el of array){
//         console.log(el);
//         const passed = test(el);

//         if(passed){
//             filteredArray.push(el);
//         }
//     }    

//     return filteredArray;
// };

// const callback1 = function(value){
//     return value >= 3;
// }

// const r1 = filter([1, 1, 3, 4 , 5], callback1);
// console.log(r1);

// const r2 = filter([1, 1, 3, 4 , 5], function(value){
//     return value <= 4 ;
// });
// console.log(r2);


// const fruits = [
//     {name: 'apple', quantity: 200, isFresh: true},
//     {name: 'grapes', quantity: 150, isFresh: false},
//     {name: 'bananas', quantity: 100, isFresh: true},
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// }

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);




// ====================Замыкание=================
// возвращает из функции другую функцию 

// const fnA = function(parametr){
//     const innerVariable = 'значение внутренней переменной функции';

//     const innerFunction = function () {
//         console.log(parametr);
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//     };

//     return innerFunction;
// };

// const fnB = fnA(555);
// fnB();
// console.log(fnB);


// ***
//  поваренок
// const makeDish = function(shefName, dish){
//     console.log(`${shefName} готовит ${dish}`);
// };


// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');



// const makeSheff = function(name){
//     const makeDish = function(dish){
//         console.log(`${name} готовит ${dish}`);
//     };
//     return makeDish;
// };

// const mango = makeSheff('Mango');
// // console.log(mango);

// mango('котлеты');
// mango('пирожок');

// const poly = makeSheff('Poly');
// poly('чай');



// ****************************************
// контекст исполнения (this)


// вызов без контекста, но объявлена как метод объекта
// const user = {
//     tag: 'Mango',
//     showTag(){
//         console.log('showTag -> this', this);
//         console.log('showTag -> this.tag', this.tag);
//     },
// };

// user.showTag();

// const outerShowTag = user.showTag;
// // user.showTag - ссылка на функцию в контексте объекта юзер
// outerShowTag();


// контекст в кол-бэк функциях
// const user = {
//         tag: 'Mango',
//         showTag(){
//             console.log('showTag -> this', this);
//             console.log('showTag -> this.tag', this.tag);
//         },
//     };
//     user.showTag(); // ссылка на того, кто вызвал

//     const invokeAction = function(action){
//         console.log(action);

//         action();
//     };
//     invokeAction(user.showTag);

// тренировка
// # 1
// const fn = function(){
//     console.log("fn -> this", this)
// };

// fn(); // undefined потому что без контекста, например = fnюthis();

// # 2
// const book = {
//     title: 'React for beginners',

//     showThis(){
//         console.log('showThis -> this', this);
//     },
//     showTitle(){
//         console.log('showTitle -> this.title', this.title);
//     },

// };
// // 1
// book.showThis(); // объект вызвал эту  функцию, значит this внутри этой функции будет ссылаться на этот объект. работает

// // 2
// const outerShowThis = book.showThis; // внешняя переменная , в которой записана ссылка на метод
// outerShowThis(); //вызов этой переменной. будети андефайнд, потому что это просто переменная, в нее ссылку на функции и вызвали ее вне какого-то объекта

// // 3
// const outerShowTitle = book.showThis;
// outerShowTitle(); // undefind, потому что нет объекта, который должен вызывать "зис"


// ******
// №3
// const makeChangeColor = function() {
//     const changeColor = function(color) {
//         console.log('changeColor -> this', this);

//     };
//     // changeColor(); -undefined

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;
//     sweater.updateColor('red'); // this - ссылается на sweater (объект, который вызывает эту функцию)
  
//     return sweater.updateColor;
// };

// const swapColor = makeChangeColor; 
// swapColor('blue'); //this undefined потому что вызвано без какого-либо объекта


// №4
// const makeChangeColor = function() {
//         const changeColor = function(color) {
//             console.log('changeColor -> this', this);
//         };

//         return changeColor;
// };
// // 1
// const updateColor = makeChangeColor();
// updateColor('yellow'); //this -- undefined

// // 2
// const hat  = {
//     color: 'blue',
//     updateColor, //ссылка на функцию updateColor
// };
// hat.updateColor('orange'); //this  ссылается на hat, использует makeChangeColor

// №5
const counter = {
    value: 0,
    increment(value){
        console.log('increment -> this', this);
        this.value += value;
    },

    decrement(value){
        console.log('increment -> this', this);
        this.value -= value;
    },
};

const updateCounter = function(value, operation){
    operation(value);
};
// 1 
updateCounter(10, counter.increment); //this = undefined
updateCounter(5, counter.decrement);//this = undefined 

// counter.increment, counter.decrement - методы обхекта
// При передачи метода объекта КАК КОЛЛБЭКОВ контекст НЕ СОХРАНЯЕТСЯ!! 