// 2. Допишите функцию countOnline

let users = [
    {
        age: 27,
        online: false
    }, {
        age: 32,
        online: true
    }, {
        age: 48,
        online: false
    }, {
        age: 19,
        online: true
    }
];

function countOnline(arr) {
    let onlineUsers = arr.filter(item => item.online === true);
    return onlineUsers;
}
console.log(countOnline(users));
