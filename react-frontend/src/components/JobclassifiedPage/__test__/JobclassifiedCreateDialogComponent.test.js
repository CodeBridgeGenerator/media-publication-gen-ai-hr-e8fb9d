import React from "react";
import { render, screen } from "@testing-library/react";

import JobclassifiedCreateDialogComponent from "../JobclassifiedCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders jobclassified create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <JobclassifiedCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("jobclassified-create-dialog-component")).toBeInTheDocument();
});
