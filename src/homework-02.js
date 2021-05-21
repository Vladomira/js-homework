// ========== 01 Ранний возврат =======
function checkAge(age) {
    if (age >= 18) { // Change this line
      return "You are an adult";
    }
  
    return "You are a minor";
  }
// ========== 02 Задача: проверка пароля (ранний возврат)===========
  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    // Change code below this line
  
    if (password === ADMIN_PASSWORD) {
      return "Welcome!";
    }
  
    return "Access denied, wrong password!";
    // Change code above this line
  }
// ========== 03 Задача: склад товаров  ==============  
function checkStorage(available, ordered) {
    // Change code below this line
    
    if (ordered === 0) {
      return 'Your order is empty!';
    }
    if (ordered > available) {
      return 'Your order is too large, not enough goods in stock!';
    } 
  
    return  'The order is accepted, our manager will contact you';
    // Change code above this line
  }
  
// ========== 04 создание массива  ============== 
  const fruits  = ["apple", "plum", "pear", "orange"];

// ========== 05 Доступ к элементам по индексу ==============  
    const fruits = ["apple", "plum", "pear", "orange"];

    // Change code below this line
    const firstElement = fruits[0];
    const secondElement = fruits[1];
    const lastElement = fruits[3];

// ========== 06 Переопределение значения элемента ==============      
const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line
fruits[1] = 'peach';
fruits[3] = "banana";

// ===============07 Длина массива ==========
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const fruitsArrayLength = fruits.length;

// ===============08 Индекс последнего элемента ==========
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const lastElementIndex = fruits.length -1;
const lastElement = fruits[lastElementIndex] ;

// =================09 Задача: Крайние элементы массива=========
function getExtremeElements(array) {
    // Change code below this line
   const firstElement = array[0];
    const lastElementIndex = array.length - 1;
    const lastElement = array[lastElementIndex];
    return [firstElement, lastElement]
  }

// =================10 Метод строк split()=========
function splitMessage(message, delimeter) {
    let words;
    // Change code below this line
  words  = message.split(delimeter);
    // Change code above this line
    return words;
  }

// =================11 Задача: гравировка украшений=========
function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
    
 for (let i = 0; i < message.split(' ').length; i += 1) {
   sum = message[0] + message[i];
   result = sum * pricePerWord;
 }
    
 return result;
 
    // Change code above this line
 }

//  ===================12 Метод массива join() =============
function makeStringFromArray(array, delimeter) {
    let string;
    // Change code below this line
   
   string = array.join(delimeter);
  
  
    // Change code above this line
    return string;
  }

//  ===================13 Задача: генератор slug =============
   function slugify(title) {
    // Change code below this line
    const normalizeTitle = title.toLowerCase('');
    const words = normalizeTitle.split(' ');
    const slug = words.join('-');

    return slug;
  }
// ===================== 14 Метод slice()=============
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(2);  

// ===================== 15 Метод concat()=============
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line

// ====================16 Задача: композиция массивов=========
function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
const newArray = firstArray.concat(secondArray).slice(0, maxLength);
return newArray;

  // Change code above this line
}

// ====================17 Цикл for==============
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1 ) { // Change this line
  console.log(i);
}

// ====================18 Задача: сумма чисел (цикл for)==============
function calculateTotal(number) {
  // Change code below this line
  let sum = 0;
  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }
   return sum;
 }

 // ====================19 Итерация по массиву==============
 const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i <fruits.length; i +=1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

// ====================20 Задача: подсчёт суммы покупки==============
// function calculateTotalPrice(order) {
//   let total = 0;
//  for (let i = 1; i <= order; i +=1) {
//    total += i;
  
//  }
//   return total;
// }

function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
 for (number of order) {
   total += number;
 }
  // Change code above this line
  return total;
}

// ====================21 Задача: поиск самого длинного слова==============
function findLongestWord(string) {
  // Change code below this line
 let arrayString = string.split(" ");
  let biggestWord = arrayString[0];
   
for ( let i = 0; i < arrayString.length; i += 1) {
  if (arrayString[i].length > biggestWord.length){
    biggestWord = arrayString[i];   
  } 
  }
  return biggestWord;
}


// function findLongestWord(string) {
//  let arrayString = string.split(" ");
//   let biggestWord = arrayString[0];
   
// for (let word of arrayString) {
//   if (word > biggestWord){
//     biggestWord = word;
   
// }
//  return biggestWord;
// }
// }

// ====================22 Метод push()==============
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  
for (i = min; i <= max; i +=1){
  numbers.push(i);
}
  // Change code above this line
  return numbers;
}

// =====================23 Задача: фильтрация массива чисел========
function filterArray(numbers, value) {
  // Change code below this line
let numbersArray = [];
 
 for (let i = 0; i < numbers.length; i +=1){
 if (numbers[i] > value){
  
   numbersArray.push(numbers[i]);
   } 
}
 return numbersArray;
}
console.log(filterArray([1, 2, 3, 4, 5], 4));

// ===============24 Метод includes()===========
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}


// ================25 Задача: общие элементы===========
function getCommonElements(array1, array2) {
  let commonNumber = [];
  
for (number of array1) {
 
     if (array2.includes(number)) {
        commonNumber.push(number);
      }
  }  
 
return commonNumber;
}
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// =====================26Цикл for...of===============
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (element of order) {
    total += element;
  }

  // Change code above this line
  return total;
}

// ====================27 Зачада: фильтрация массива чисел 2.0===========
function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (number of numbers) {
   

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
}


// =====================28 Оператор % ==============================
// Change code below this line
const a = 3 %3;
const b = 4 %3;
const c = 11 %8;
const d = 12 %7;
const e = 8 %6 ;

// ================29 Задача: чётные числа============
function getEvenNumbers(start, end) {
  // Change code below this line
const number = [];
 
for (let i = start; i <= end ; i += 1) {
  if (i %2 === 0){
  number.push(i);
}
}
return number;
  
 }
console.log(getEvenNumbers(6, 12));

// ====================30 Оператор break=============
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    
    break;
  }
}


// ===================== 31 Оператор break vs return в функции=============
function findNumber(start, end, divisor) {

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }

}


// ====================32 Задача: функция includes()============
function includes(array, value) {
 for (let i = 0; i <= array.length; i += 1){
   if ( array[i] === value) {
     return true;
   }
   
}
  return false;

}
