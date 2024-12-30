const addTodoListButton = document.getElementById("addTodo");
const todos = [];

addTodoListButton.addEventListener("click", () => {
  let getTodoContent = document.querySelector("#inputText").value;
  
  if (getTodoContent != "") {
    todos.push(getTodoContent);
    todos.forEach(todo => {
      const list = document.querySelector(".displayTodo");
      let li = document.createElement("li");
      li.innerHTML = todo;
      list.appendChild(li);
    });
  }

  document.querySelector("#inputText").value = "";

});