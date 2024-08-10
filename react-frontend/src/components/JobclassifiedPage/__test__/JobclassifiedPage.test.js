import React from "react";
import { render, screen } from "@testing-library/react";

import JobclassifiedPage from "../JobclassifiedPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders jobclassified page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <JobclassifiedPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("jobclassified-datatable")).toBeInTheDocument();
    expect(screen.getByRole("jobclassified-add-button")).toBeInTheDocument();
});
