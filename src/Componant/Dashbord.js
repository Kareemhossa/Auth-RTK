import React, { useState } from "react";
import styles from "../Styles/dashbord.module.css";

const AdminDashboard = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "Mahmoud",
      email: "Mahmoud@test.com",
      password: "12345",
      role: "admin",
    },
    {
      id: 2,
      username: "Ali",
      email: "Ali@test.com",
      password: "12345",
      role: "clint",
    },
  ]);
  const [newUser, setNewUser] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
    role: "",
  });

  //Hander create new user
  const handleCreateUser = (e) => {
    e.preventDefault();
    const updatedUser = { ...newUser, id: users.length + 1 };
    // console.log("New User:", updatedUser);
    setUsers([...users, updatedUser]);
    setNewUser({
      id: "",
      username: "",
      email: "",
      password: "",
      role: "",
    });
  };

  //handel state after remove itmes
  const handleRemoveUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <section className={styles.Containerdashboard}>
      <h2>Admin Dashboard</h2>
      <form className={styles.form} onSubmit={handleCreateUser}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={newUser.username}
          onChange={(e) => {
            setNewUser({ ...newUser, username: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={newUser.email}
          onChange={(e) => {
            setNewUser({ ...newUser, email: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={newUser.password}
          onChange={(e) => {
            setNewUser({ ...newUser, password: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Role"
          name="role"
          value={newUser.role}
          onChange={(e) => {
            setNewUser({ ...newUser, role: e.target.value });
          }}
        />

        <button className={styles.createBtn} onClick={handleCreateUser}>
          Create User
        </button>
      </form>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className={styles.removeBtn}
                  onClick={() => handleRemoveUser(user.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AdminDashboard;
