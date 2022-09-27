import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { GetUsers } from "./GetUsers";
import { LOAD_USERS } from "../graphql/Query";

const mocks = {
  request: {
    query: LOAD_USERS,
  },
  result: {
    data: {
      users: [
        {
          id: "1",
          name: "John Doe",
          email: "johndoe@gmail.com",
          phone: "1234567890",
        },
      ],
    },
  },
};

it("Render GetUsers component", async () => {
  render(
    <MockedProvider mocks={[mocks]} addTypename={false}>
      <GetUsers />
    </MockedProvider>
  );

  expect(await screen.getByText("Loading...")).toBeInTheDocument();
});
