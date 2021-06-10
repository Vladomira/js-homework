'use strict'
// В дочернем классе можно объявлять методы которые будут
// доступны только его экземплярам.


// Методы дочернего класса
class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  class Admin extends User {
    // Пиши код ниже этой строки
    blacklistedEmails = []; 
    
    blacklist(email) {
    this.blacklistedEmails.push(email);
    }
    
    isBlacklisted(email){
      for (let el of this.blacklistedEmails){
      if (this.blacklistedEmails.includes(email)){
      return true;
     }
    }return false;
   }
    
    
    static AccessLevel = {
      BASIC: 'basic',
      SUPERUSER: 'superuser'
    };
  
    accessLevel;
  
    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
    }
  
    // Пиши код выше этой строки
  }
  
  const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER
  });
  
  console.log(mango.email); // mango@mail.com
  console.log(mango.accessLevel); // superuser
  mango.blacklist('poly@mail.com');
  console.log(mango.blacklistedEmails); // 'poly@mail.com'
  console.log(mango.isBlacklisted('mango@mail.com')); //  false
  console.log(mango.isBlacklisted('poly@mail.com')); // true 