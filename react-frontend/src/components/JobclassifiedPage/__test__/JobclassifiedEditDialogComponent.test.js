import React from "react";
import { render, screen } from "@testing-library/react";

import JobclassifiedEditDialogComponent from "../JobclassifiedEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders jobclassified edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <JobclassifiedEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("jobclassified-edit-dialog-component")).toBeInTheDocument();
});
