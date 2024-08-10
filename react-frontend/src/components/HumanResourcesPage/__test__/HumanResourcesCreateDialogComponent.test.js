import React from "react";
import { render, screen } from "@testing-library/react";

import HumanResourcesCreateDialogComponent from "../HumanResourcesCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders humanResources create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <HumanResourcesCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("humanResources-create-dialog-component")).toBeInTheDocument();
});
