'use strict'
// Первым делом в конструкторе дочернего класса необходимо вызвать специальную
// функцию super(аргументы) - это псевдоним конструктора родительского класса.
// В противном случае, при попытке обратиться к this в конструкторе дочернего клаcса,
// будет ошибка. При вызове конструктора класса родителя передаём необходимые
// ему аргументы для инициализации свойств.

// Конструктор дочернего класса
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
    accessLevel; //публичное свойство
    
    constructor ({email, accessLevel}){
    super (email);
    this.email = email;
    this.accessLevel = accessLevel;
    }
    
    
    static AccessLevel = {
      BASIC: 'basic',
      SUPERUSER: 'superuser'
    };
  
    // Пиши код выше этой строки
  }
  
  const mango = new Admin({
    email: 'mango@mail.com',
    accessLevel: Admin.AccessLevel.SUPERUSER
  });
  
  console.log(mango.email); // mango@mail.com
  console.log(mango.accessLevel); // superuser