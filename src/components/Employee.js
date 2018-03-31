import React, { Component } from "react";

import { Row, Field } from "./styled";

export class Employee extends Component {
    render() {
        return (
            <Row>
                <Field>{this.props.employee.firstName}</Field>
                <Field>{this.props.employee.lastName}</Field>
                <Field>{this.props.employee.company}</Field>
                <Field>{this.props.employee.displayedDate}</Field>
                <Field>{this.props.employee.note}</Field>
            </Row>
        );
    }
}
