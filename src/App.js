import React, { Component } from "react";

import { Employees } from "./components/Employees";
import { AppContainer } from "./components/styled";

export class App extends Component {
    render() {
        return (
            <AppContainer>
                <Employees />
            </AppContainer>
        );
    }
}
