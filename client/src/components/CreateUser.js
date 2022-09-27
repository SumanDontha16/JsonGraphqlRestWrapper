import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/Mutations";
import { LOAD_USERS } from "../graphql/Query";

const CreateUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [createUser] = useMutation(CREATE_USER);

  const handleCreateUser = (e) => {
    e.preventDefault();
    createUser({
      variables: {
        input: {
          name: user.name,
          email: user.email,
          phone: user.phone,
        },
      },
      refetchQueries: [LOAD_USERS, "getAllUsers"],
    });
    setUser({
      name: "",
      email: "",
      phone: "",
    });
  };
  return (
    <>
      <h2>CREATE USER</h2>
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Enter name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          name="email"
          value={user.email}
          placeholder="Enter email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="text"
          name="phone"
          value={user.phone}
          placeholder="Enter phone number"
          onChange={(e) => setUser({ ...user, phone: e.target.value })}
        />
        <button type="submit" className="btn-create-user">
          Create User
        </button>
      </form>
    </>
  );
};

export default CreateUser;
