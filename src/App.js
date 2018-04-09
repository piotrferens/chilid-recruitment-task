import React, { Component } from "react";

import { AppContainer } from "./components/styled";
import { Employees } from "./components/Employees";

import logo from "../public/logo.svg";
import workers from "../public/pracownicy.svg";

export class App extends Component {
    render() {
        return (
            <AppContainer>
                <img src={logo} alt="Pracownicy" />
                <img src={workers} alt="Chilid logo" />
                <Employees />
            </AppContainer>
        );
    }
}
