'use strict'

// Задача. Общие элементы
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
      
firstArray.forEach(function(elementF) {
    secondArray.forEach(function (elementSec)  {
        if(elementF === elementSec){
            commonElements.push(elementSec); 
       }
          
    })
 });
return commonElements;
}
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));



 
// 2-й варіант

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки

//   firstArray.forEach(element =>
//    {if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     })
  
//     return commonElements;
//     // Пиши код выше этой строки
//   }

