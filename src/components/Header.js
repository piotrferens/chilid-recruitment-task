import React, { Component } from "react";

import { TableHeader, TableHeaderItem, TableHeaderRow } from "./styled";

export class Header extends Component {
    render() {
        return (
            <TableHeader>
                <TableHeaderRow>
                    <TableHeaderItem onClick={() => this.props.setSort("firstName")}>
                        First name
                    </TableHeaderItem>
                    <TableHeaderItem onClick={() => this.props.setSort("lastName")}>
                        Last name
                    </TableHeaderItem>
                    <TableHeaderItem onClick={() => this.props.setSort("company")}>
                        Company
                    </TableHeaderItem>
                    <TableHeaderItem
                        title="(DD/MM/YYYY)"
                        onClick={() => this.props.setSort("dateOfBirth")}
                    >
                        Date of birth
                    </TableHeaderItem>
                    <TableHeaderItem onClick={() => this.props.setSort("note")}>
                        Note
                    </TableHeaderItem>
                </TableHeaderRow>
            </TableHeader>
        );
    }
}
