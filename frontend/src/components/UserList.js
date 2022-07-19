import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const userList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get(`http://localhost:5000/user`);
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/user/${id}`);
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns">
      <div className="column is-half">
        <table className="table is-striped is-fullwidth mt-5">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link
                    to={`update/${user._id}`}
                    className="button is-info is-small"
                  >
                    UPDATE
                  </Link>
                  <button
                    onClick={() => deleteUser(user._id)}
                    className="button is-danger is-small"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
        <Link to="addUser" className="button is-success">
          ADD USER
        </Link>
      </div>
    </div>
  );
};

export default userList;
