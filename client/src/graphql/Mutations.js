import { gql } from "@apollo/client";

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

// Delete User
export const DELETE_USER = gql`
  mutation ($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId) {
      id
    }
  }
`;
