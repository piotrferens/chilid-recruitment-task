import React, { Component } from "react";

import { AppContainer } from "./components/styled";
import { Employees } from "./components/Employees";

export class App extends Component {
    render() {
        return (
            <AppContainer>
                <Employees />
            </AppContainer>
        );
    }
}
