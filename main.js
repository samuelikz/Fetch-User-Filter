let sortOrder = 1;
let users = [];
const myUrl = "https://jsonplaceholder.typicode.com/users";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function sortUsers(users, order) {
  return users.slice().sort((a, b) => {
    const aValue = a.name.toUpperCase();
    const bValue = b.name.toUpperCase();
    return (aValue > bValue ? 1 : -1) * order;
  });
}

function filterUsersByName(users, name) {
  return users.filter(user => user.name.includes(name));
}

function displayData(tbody, users) {
  tbody.innerHTML = users
    .map(
      (user) => `
    <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
    </tr>
  `
    )
    .join("");
}

async function initializeApp() {
  const tbody = document.getElementById("table-body");
  const sortBtn = document.getElementById("sort");
  const nameFilter = document.getElementById("nameFilter");

  users = await fetchData(myUrl);
  displayData(tbody, users);

  sortBtn.addEventListener("click", () => {
    sortOrder = -sortOrder;
    users = sortUsers(users, sortOrder);
    displayData(tbody, users);
  });

  nameFilter.addEventListener("input", () => {
    const filterValue = nameFilter.value.trim();
    const filteredUsers = filterUsersByName(users, filterValue);
    displayData(tbody, filteredUsers);
  });
}

if (typeof document !== "undefined") {
  initializeApp();
}
