'user strict'
// Задача. Общее количество друзей
const getTotalFriendCount = users => users.reduce 
    ((allFriends, user) =>
     {return allFriends += user.friends.length}, 0);     



    //  ===========or
    // const getTotalFriendCount = users =>
    // { return users.reduce((allFriends, user) =>
    //{return allFriends += user.friends.length}, 0);  }    



// maybe...but no
// const getTotalFriendCount = users => 
// {users.flatMap(user => user.friends).filter((friend, index, array) => 
// array.indexOf(friend) === index).reduce
// ((allFriends, user) => {return allFriends += user.friend}, 0)   
//  };
        










// ===============э
// Тесты
// Объявлена переменная getTotalFriendCount.
// Переменной getTotalFriendCount присвоена стрелочная функция с параметром (users).
// Для перебора параметра users используется метод reduce().
// Вызов функции с указанным массивом пользователей возвращает число 14
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.