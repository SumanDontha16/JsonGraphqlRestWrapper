import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../graphql/Query";

function GetUsers() {
  const [users, setUsers] = useState([]);
  const { loading, error, data } = useQuery(LOAD_USERS);

  useEffect(() => {
    setUsers(data?.users);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        );
      })}
    </div>
  );
}

export default GetUsers;
