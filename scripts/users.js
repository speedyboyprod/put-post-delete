const userTable = document.getElementById("userTable");
const userInfo = document.getElementById("userInfo");

fetch(`http://jsonplaceholder.typicode.com/users`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      let row = userInfo.insertRow();

      let cellId = row.insertCell();
      cellId.innerHTML = user.id;

      let cellName = row.insertCell();
      cellName.innerHTML = user.name;

      let cellUsername = row.insertCell();
      cellUsername.innerHTML = user.username;

      let cellEmail = row.insertCell();
      cellEmail.innerHTML = user.email;

      let cellPhone = row.insertCell();
      cellPhone.innerHTML = user.phone;

      let cellWebsite = row.insertCell();
      cellWebsite.innerHTML = user.website;
    });
  });
