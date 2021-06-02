// ===============#1 Функция как значение============
function makePizza() {
    return 'Ваша пицца готовится, ожидайте.';
   }
  // Пиши код ниже этой строки
  
  const result = makePizza();
  const pointer = makePizza;

//   =================№2 Колбэк-функции ====================
function deliverPizza(pizzaName) {
    return `Доставляем пиццу ${pizzaName}.`;
  }
  
  function makePizza(pizzaName) {
    return `Пицца ${pizzaName} готовится, ожидайте...`;
  }
  
  // Пиши код ниже этой строки
  function makeMessage(pizzaName, callback) {
     
    if (callback === deliverPizza){
      return deliverPizza(pizzaName);
    }
    return makePizza(pizzaName);
  }
  
//   ================== #3 Инлайн-колбэки=============
function makePizza(pizzaName, callback) {
    console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
    callback(pizzaName);
  }
  
  makePizza('Роял гранд', function deliverPizza(pizzaName) {
    console.log(`Доставляем пиццу ${pizzaName}.`);
  });
  // Пиши код ниже этой строки
  
  makePizza('Ультрасыр', function eatPizza(pizzaName){
    console.log(`Едим пиццу ${pizzaName}.`);
  });
  
//   =============#4 Несколько колбэков==================
const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    order(pizzaName, onSuccess, onError) {
      
      for (let el of this.pizzas){
          if (el === pizzaName){ 
           
             return onSuccess(pizzaName); 
          }
      }
           return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);                 
        
      },
  };
  // Пиши код выше этой строки
  
  // Колбэк для onSuccess
  function makePizza(pizzaName) {
    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
  }
  
  // Колбэк для onError
  function onOrderError(error) {
    return `Ошибка! ${error}`;
  }
  
  // Вызовы метода с колбэками
  pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
  pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
  pizzaPalace.order('Биг майк', makePizza, onOrderError);
  pizzaPalace.order('Венская', makePizza, onOrderError);
  
  
// ===================  #5 Контекст вызова функции==============
const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    // Пиши код ниже этой строки
    checkPizza(pizzaName) {
      return this.pizzas.includes(pizzaName);
    },
    order(pizzaName) {
      const isPizzaAvailable = this.checkPizza(pizzaName);
  
      if (!isPizzaAvailable) {
        return `В ассортименте нет пиццы с названием «${pizzaName}».`;
      }
  
      return `Заказ принят, готовим пиццу «${pizzaName}».`;
    },
    // Пиши код выше этой строки
  };

//   =============#6 Задача. Аккаунт пользователя===================
const customer = {
    username: 'Mango',
    balance: 24000,
    discount: 0.1,
    orders: ['Burger', 'Pizza', 'Salad'],
    // Пиши код ниже этой строки
    getBalance() {
      return this.balance;
    },
    getDiscount() {
      return this.discount;
    },
    setDiscount(value) {
      this.discount = value;
    },
    getOrders() {
      return this.orders;
    },
    addOrder(cost, order) {
      this.balance -= cost - cost * this.discount;
      this.orders.push(order);
    },
    // Пиши код выше этой строки
  };
  
  customer.setDiscount(0.15);
  console.log(customer.getDiscount()); // 0.15
  customer.addOrder(5000, 'Steak');
  console.log(customer.getBalance()); // 19750
  console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

//   ===================== #7 Метод call ==============
const orders = [
    { email: 'solomon@topmail.ua', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'jacob@mail.com', dish: 'Taco' },
  ];
  
  // Пиши код ниже этой строки
  function composeMessage(position) { 
     return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
    }
  
  const messages = [];
  
   for (let i = 0; i < orders.length; i += 1){
   messages.push(composeMessage.call(orders[i], i + 1));
   } 

//  ===================== 8 Метод apply ==================
