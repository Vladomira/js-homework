//  пример №1
const showThis = function(...args){
    console.log(args);
    console.log('showThis -> this', this);
};

showThis();

const objA= {
    a: 5,
    b: 10,
};
// 1
showThis.call(objA, 5, 1, 4 );
// call - вызывает функцию showThis  в контексте objA здесь и сейчас


// 2 тоже самое, что call, но аргументы передаются не по отдельности, а массивом
showThis.apply(objA, [5, 1, 4]);



// пример №2
const changeColor = function() {
    console.log('changeColor -> this', this);
    this.color = color;
};
// 1
const hat = {
    color: 'black',
};

changeColorcall(hat, 'orange');
console.log(hat);


// 2
const sweater = {
    color: 'green',
};
changeColorcall(sweater, 'orange'); //changeColorcall вызван в контектсе sweater
console.log(sweater);



// bind --- делает копию функцию с приявязаным контекстом, не вызывает эту функцию здесь и сейчас, функция остается такой как была, создается копия
// 1
changeColor(); // undefined
const changeHatColor = changeColor.bind(hat);
changeHatColor(); // ссылается на черную шапку (29 строка) и это навсегда

changeHatColor(yellow); // шапка будет желтая
console.log(hat);//yellow

// 2
const changeSweaterColor = changeColor.bind(sweater);
changeSweaterColor(); 

// решение 5 задачи
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
updateCounter(10, counter.increment.bind(counter)); 
updateCounter(5, counter.decrement.bind(counter));

console.log(counter);//5 добавили 10 и отняли 5
