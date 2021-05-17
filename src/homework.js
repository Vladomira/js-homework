// №25
// function checkStorage(available, ordered) {
//     let message;
   
//   message = ordered > available ? "Not enough goods in stock!" : "The order is placed, the manager will contact you";
//   console.log(message)  
  
   
//     return message;
//   }

//============№26//============
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     let message;
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
    
//     return message;
//   }

  //============№27 switch============
  function getSubscriptionPrice(type) {
    let price;
    // Change code below this line
  
   switch (type) { // Change this line
      case 'starter': // Change this line
        price = 0; // Change this line
        break;
  
      case 'professional': // Change this line
        price = 20 ; // Change this line
        break;
  
      case 'organization': // Change this line
        price = 50; // Change this line
        break;
    }
  
    // Change code above this line
    return price;
  }

  //============№28 default============
  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
   switch (password) {
     case null:
     message = "Canceled by user!";    
     break;  
       
      case ADMIN_PASSWORD:   
     message  = "Welcome!";
     break;    
       
     default: 
     message  = "Access denied, wrong password!";
   } 
    
  
    // Change code above this line
    return message;
  }
  
   //============№29============
   function getShippingCost(country) {
    let message;
     let price;
    // Change code below this line
   switch (country) {
     case 'China': 
     price = 100;
     message ="Shipping to China will cost 100 credits";
     break;
       
     case 'Chile':
     price = 250;
     message ="Shipping to Chile will cost 250 credits";
     break;
      
     case 'Jamaica': 
     price = 120;
     message ="Shipping to Jamaica will cost 120 credits";
     break;
      
     case 'Australia':        
     price = 170;
     message ="Shipping to Australia will cost 170 credits";
      break;
     
     default:
       message = "Sorry, there is no delivery to your country";
   }
    // Change code above this line
    return message;
  }
//============№30 lenght============
  function getNameLength(name) {
    const message = `Name ${name} is ${name.length} characters long`; // Change this line
  
    return message;
  }
  
 //============№31 Индексация элементов строки============
  const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Change code above this line

//============№32 slice============
function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}

//============№33 Задача: форматирование сообщения============
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
 if (message.length <= maxLength){
   result = message;
 }else if (message.length > maxLength){ 
   result = message.slice(0, maxLength) + "...";
 }
   
  /// Change code above this line
  return result;
}

//============№34 Методы toLowerCase() и toUpperCase()============
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

//============№35 Метод includes()============
function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
   return result;
 }
 
//============№36 Задача: проверка спама============
function checkForSpam(message) {
  let result;
  // Change code below this line
 message= message.toLowerCase(); 
  result = message.includes("spam") || message.includes("sale");
  // Change code above this line
  return result;
}
