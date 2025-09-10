    let users = [];
    let editIndex = null;

    function renderTable() {
      const table = document.getElementById('userTable');
      table.innerHTML = '';
      users.forEach((user, index) => {
        table.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.role}</td>
            <td>
              <button onclick="editUser(${index})">Edit</button>
              <button onclick="deleteUser(${index})">Delete</button>
            </td>
          </tr>
        `;
      });
    }

    function addOrUpdateUser() {
      const name = document.getElementById('name').value.trim();
      const role = document.getElementById('role').value.trim();
      if (!name || !role) return alert("Please fill in both fields.");

      if (editIndex !== null) {
        users[editIndex] = { name, role };
        editIndex = null;
      } else {
        users.push({ name, role });
      }

      document.getElementById('name').value = '';
      document.getElementById('role').value = '';
      renderTable();
    }

    function editUser(index) {
      document.getElementById('name').value = users[index].name;
      document.getElementById('role').value = users[index].role;
      editIndex = index;
    }

    function deleteUser(index) {
      if (confirm("Are you sure you want to delete this user?")) {
        users.splice(index, 1);
        renderTable();
      }
    }

    renderTable();