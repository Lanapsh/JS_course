// Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// Проверить числа на корректность


function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
var x = + prompt("Введите число");
var n = + prompt("Введите степень");
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }

