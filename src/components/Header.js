import React, { Component } from "react";

import { Row, Field } from "./styled";

export class Header extends Component {
    render() {
        return (
            <Row>
                <Field onClick={() => this.props.setSort("firstName")}>First name</Field>
                <Field onClick={() => this.props.setSort("lastName")}>Last name</Field>
                <Field onClick={() => this.props.setSort("company")}>Company</Field>
                <Field onClick={() => this.props.setSort("dateOfBirth")}>Date of birth</Field>
                <Field onClick={() => this.props.setSort("note")}>Note</Field>
            </Row>
        );
    }
}
