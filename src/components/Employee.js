import React, { Component } from "react";

import { TableCell, TableRow } from "./styled";

export class Employee extends Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.employee.firstName}</TableCell>
                <TableCell>{this.props.employee.lastName}</TableCell>
                <TableCell>{this.props.employee.company}</TableCell>
                <TableCell>{this.props.employee.displayedDate}</TableCell>
                <TableCell>{this.props.employee.note}</TableCell>
            </TableRow>
        );
    }
}
