import React from "react";
import { render, screen } from "@testing-library/react";

import HumanResourcesPage from "../HumanResourcesPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders humanResources page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HumanResourcesPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("humanResources-datatable")).toBeInTheDocument();
    expect(screen.getByRole("humanResources-add-button")).toBeInTheDocument();
});
