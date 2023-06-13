const toDoInput = document.getElementById("toDoId");
const titleInput = document.getElementById("title");
const userIdInput = document.getElementById("userId");
const completedBox = document.getElementById("completed");

document.getElementById("editBtn").addEventListener("click", () => {
  const url = `http://localhost:3000/todos/${toDoInput.value}`;

  fetch(url)
    .then((res) => res.json())
    .then((toDoItem) => {
      toDoInput.disabled = true;
      titleInput.value = toDoItem.title;
      userIdInput.value = toDoItem.userId;
      completedBox.checked = toDoItem.completed;
    });
});

document.getElementById("updateBtn").addEventListener("click", () => {
  const url = `http://localhost:3000/todos/${toDoInput.value}`;

  const bodyData = {
    title: titleInput.value,
    userId: userIdInput.value,
    completed: completedBox.checked,
  };

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(bodyData),
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((editedItem) => {
      const message = document.getElementById("messageArea");
      message.innerHTML = `Your edit for item ID ${editedItem.id} was succsessful!`;
    });
});

document.getElementById("cancelBtn").addEventListener("click", () => {
  location.href = "./index.html";
});
