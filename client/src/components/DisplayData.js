import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_ALBUMS } from "../graphql/Query";

const DisplayData = () => {
    const { loading, error, data: {albums} = [] } = useQuery(GET_ALL_ALBUMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>ALBUMS LIST</h2>
      {albums.map((album) => (
        <div key={album.id}>
          <p>{album.title}</p>
        </div>
      ))}
    </div>
  );
 }

export default DisplayData;
