const addTodoListButton = document.getElementById("addTodo");

addTodoListButton.addEventListener("click", () => {
  const todos = [];
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