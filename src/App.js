import React, { Component } from "react";

import { AppContainer, ImgEmployee, ImgLogo, WorkersList } from "./components/styled";
import { Employees } from "./components/Employees";

import logo from "../public/logo.svg";
import workers from "../public/pracownicy.svg";

export class App extends Component {
    render() {
        return (
            <AppContainer>
                <ImgLogo>
                    <img src={workers} alt="Chilid logo" />
                    <WorkersList>Workers List</WorkersList>
                </ImgLogo>
                <Employees />
                <ImgEmployee>
                    <img src={logo} alt="Pracownicy" />
                </ImgEmployee>
            </AppContainer>
        );
    }
}
