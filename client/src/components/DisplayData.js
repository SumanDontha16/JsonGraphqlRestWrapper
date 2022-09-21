import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_ALBUMS } from "../graphql/Query";

function DisplayData() {
  const { loading, error, data } = useQuery(GET_ALL_ALBUMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>ALBUMS LIST</h2>
      {data?.albums.map((album) => {
        return (
          <div key={album.id}>
            <div className="container-wrap">
              <p>{album.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayData;