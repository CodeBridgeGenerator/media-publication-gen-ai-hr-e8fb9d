import React from "react";
import { render, screen } from "@testing-library/react";

import HumanResourcesEditDialogComponent from "../HumanResourcesEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders humanResources edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HumanResourcesEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("humanResources-edit-dialog-component")).toBeInTheDocument();
});
