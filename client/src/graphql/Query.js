//import { gql } from "@apollo/client";
import gql from "graphql-tag";

export const LOAD_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      email
      phone
    }
  }
`;

export const GET_ALL_ALBUMS = gql`
  query GetAllAlbum {
    albums {
      id
      title
    }
  }
`;
