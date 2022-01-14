var toDoInput = document.querySelector('#newToDo');
var toDoBtn = document.querySelector('#AddToDo');
var toDoWrapper = document.querySelector('#toDoList');

toDoBtn.onclick = () => {
    // alert('btn was clicked!');
    // console.log(toDoInput.value);

    // create Li elem
    let listItem = document.createElement('li');

    // listItem.innerText = toDoInput.value;

    listItem.className = 'listItem';

    listItem.innerHTML = `
        <span class="TodoText">${toDoInput.value}</span>
        <button class="_removeBtn">Remove</button>`;

    // console.log(listItem);

    let removeBtn = listItem.querySelector('._removeBtn');
    // console.log(removeBtn);

    removeBtn.onclick = () => {
        listItem.remove();
    }

    toDoInput.value = '';

    toDoWrapper.appendChild(listItem);

    //console.log(listItem);
}