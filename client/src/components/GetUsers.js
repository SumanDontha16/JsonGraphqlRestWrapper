import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../graphql/Query";

function GetUsers() {
  const { loading, error, data } = useQuery(LOAD_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>USERS LIST</h2>
      {data.users.map((user) => (
        <div key={user.id} className="container-wrap">
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default GetUsers;
