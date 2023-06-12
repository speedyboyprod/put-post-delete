const toDoInput = document.getElementById("toDoId");
const submitBtn = document.getElementById("submitBtn");
const toDoInfo = document.getElementById("toDoList");

submitBtn.addEventListener("click", () => {
  toDoInfo.innerHTML = ``;

  fetch(`http://jsonplaceholder.typicode.com/todos/${toDoInput.value}`)
    .then((response) => response.json())
    .then((todo) => {
      toDoInfo.innerHTML = `The status of this to-do item "${todo.title}", is ${todo.completed}.`;
    });
});
