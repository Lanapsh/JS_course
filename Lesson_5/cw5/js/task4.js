// 4.  Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
let obj ={};
let ifObgEmpty = Object.keys(obj);
function isEmpty(obj){
    if(Object.keys(obj).length == 0){
        return true;
    }
}
console.log(isEmpty(obj));