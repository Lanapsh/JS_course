// 3. Допишите функцию,
// которая определит,
// парное ли число(решение должно быть в одну строку).Функция должна вернуть "Even" или "Odd";

function isEven(num) { 
    if (num % 2 == 0){
      return 'Even'
    } else{
      return 'Odd'
    }
  }
  
  console.log(isEven(3));
  console.log(isEven(10))
