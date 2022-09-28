//import { gql } from "@apollo/client";
import gql from "graphql-tag";

// Create User
export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput) {
    createUser(input: $input) {
      id
      name
      email
      phone
    }
  }
`;

// Update User
export const UPDATE_USER = gql`
  mutation updateUserName($updateUserNameInput2: UpdateUserInput!) {
  updateUserName(input: $updateUserNameInput2){
    id
    name
    email
  }
}
`;



// Delete User
export const DELETE_USER = gql`
  mutation ($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId) {
      id
    }
  }
`;
