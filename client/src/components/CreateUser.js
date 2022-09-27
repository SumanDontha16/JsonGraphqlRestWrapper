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
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </form>
    </>
  );
};

export default CreateUser;
