const addTodoListButton = document.getElementById("addTodo");
const todos = [];

addTodoListButton.addEventListener("click", () => {
  const getTodoContent = document.querySelector("#inputText").value;
  
  todos.push(getTodoContent);
  todos.forEach(todo => {
    const list = document.querySelector("#displayTodo");
    let li = document.createElement("li");
    li.innerHTML = todo;
    //@@@ todo ↓表示できないので要確認
    list.appendChild(li);
  });
});