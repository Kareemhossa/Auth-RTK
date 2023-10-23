import React, { useState, useEffect } from "react";
// Style Css
import styles from "../Styles/dashbord.module.css";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const API_URL = "http://localhost:3005/api";
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
      // console.error("Error fetching users: ", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //handel to create anew users and post intable and updateapi
  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newUser, id: users.length + 1 }),
      });
      const data = await response.json();
      setUsers([...users, data]);
      setNewUser({
        id: users.length + 2,
        username: "",
        email: "",
        password: "",
        role: "",
      });
    } catch (error) {
      toast.error(error?.data?.message || error.error);
      // console.error("Error creating user: ", error);
    }
  };

  //handel to remove
  const handleRemoveUser = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      const updatedUsers = users.filter((user) => user.id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
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
          required
          onChange={(e) => {
            setNewUser({ ...newUser, username: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={newUser.email}
          required
          onChange={(e) => {
            setNewUser({ ...newUser, email: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Password"
          name="password"
          value={newUser.password}
          required
          onChange={(e) => {
            setNewUser({ ...newUser, password: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Role"
          name="role"
          value={newUser.role}
          required
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
