const userIdEl = document.getElementById("userId");
const titleEl = document.getElementById("title");

const url = "http://localhost:3000/todos";

document.getElementById("addBtn").addEventListener("click", () => {
  let bodyData = {
    userId: userIdEl.value,
    title: titleEl.value,
    completed: false,
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((todo) => {
      alert(`Created new todo item with the ID of ${todo.id}`);
    })
    .catch((ERR) => {
      alert(`${ERR}Unable to add student.`);
    });
});
