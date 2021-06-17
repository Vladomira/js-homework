'use strict'
// Стрелочные функции как коллбеки


// Пиши код ниже этой строки
const calculateTotalPrice = orderedItems=> {
    let totalPrice = 0;
  
    orderedItems.forEach(item => totalPrice += item); 
  
   return totalPrice;
  }
  // Пиши код выше этой строки