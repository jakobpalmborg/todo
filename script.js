document.querySelector("form").addEventListener("submit", handleSubmitForm);
document.querySelector("ul").addEventListener("click", handleClickDeleteOrCheck);
document.querySelector("#clearAll").addEventListener("click", clearAll);

const todoArr = [];
let num = 0;
const numberDone = document.querySelector("#numberDone");

function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") addTodo(input.value);
  input.value = "";
}

function handleClickDeleteOrCheck(e) {
  if (e.target.name == "checkButton") checkTodo(e);

  if (e.target.name == "deleteButton") deleteTodo(e);
}

function addTodo(todo) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><img src="check2.png" alt="check icon"></button>
        <button name="deleteButton"><img src="trash.png" alt="trash icon"></button>
    `;
  ul.appendChild(li);

  const todoObject = {};
  todoObject.todo = todo;
  todoArr.push(todoObject);
}

function checkTodo(e) {
  let item = e.target.parentNode;
  if (item.style.textDecoration == "line-through") {
    item.style.textDecoration = "none";
    takeAwayTask();
  } else {
    item.style.textDecoration = "line-through";
    addNumberOfTask();
  }
}

function addNumberOfTask() {
  num++;
  numberDone.innerHTML = num;
}

function takeAwayTask() {
  num--;
  numberDone.innerHTML = num;
}

function deleteTodo(e) {
  let item = e.target.parentNode;
  item.remove();
}

function clearAll() {
    num = 0;
    numberDone.innerHTML = num;
    let ul = document.querySelector(".todo-list");
    ul.innerHTML = "";
}























/*const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener('click', addTodo);

function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    const completedButton = document.createElement('button');
    completedButton.innerHTML = 'completed'
    completedButton.classList.add("completedButton");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = 'trash'
    trashButton.classList.add("trashButton");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
}

*/
