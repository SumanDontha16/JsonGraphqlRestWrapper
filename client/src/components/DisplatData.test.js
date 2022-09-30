import React from "react";
import { render, screen } from "@testing-library/react";
import { itAsync, MockedProvider } from "@apollo/client/testing";
import { DisplayData } from "./DisplayData";
import { GET_ALL_ALBUMS } from "../graphql/Query";

const mockAlbums = [
    {
        request: {
            query: GET_ALL_ALBUMS,
        },
        result: {
            data: {
                albums: [
                    {
                        id: "1",
                        title: "Album 1",
                    },
                ],
            },
        },

    }
];

describe("DisplayData component", () => { 
    it("renders loading state initially", () => { 
        render(
            <MockedProvider mocks={[]} addTypename={false}>
                <DisplayData />
            </MockedProvider>
        );
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("renders albums", async () => {
        render(
            <MockedProvider mocks={mockAlbums} addTypename={false}>
                <DisplayData />
            </MockedProvider>
        );

        expect(await screen.findByText("Album 1")).toBeInTheDocument();
    });

    it("renders error state", async () => {
        const errorMocks = [
            {
                request: {
                    query: GET_ALL_ALBUMS,
                },
                error: new Error("An error occurred"),
            },
        ];

        render(
            <MockedProvider mocks={errorMocks} addTypename={false}>
                <DisplayData />
            </MockedProvider>
        );

        expect(await screen.findByText("Error: An error occurred")).toBeInTheDocument();
    });
});