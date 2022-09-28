import React from "react";
import { useMutation } from "@apollo/client";
import { DELETE_USER } from "../graphql/Mutations";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../graphql/Query";

const GetUsers = () => {
  const { loading, error, data: { users } = [] } = useQuery(LOAD_USERS);
  const [deleteUser] = useMutation(DELETE_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message }</p>;

  const removeUser = (deleteUserId) => {
    deleteUser({
      variables: {
        deleteUserId,
      },
      refetchQueries: [LOAD_USERS, "getAllUsers"],
    });
  };

  return (
    <div>
      <h2>USERS LIST</h2>
      {users.map((user) => (
        <div key={user.id} className="container-wrap">
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <button
            onClick={() => removeUser(user.id)}
            className="btn-delete-user"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default GetUsers;
