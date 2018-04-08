import React, { Component } from "react";
import { connect } from "react-redux";

import { requestEmployees } from "../actions/requestEmployees";
import { Employee } from "./Employee";
import { Header } from "./Header";
import { Table, TableBody } from "./styled";
import { employeesSelector } from "../selectors/employees";
import { setSort } from "../actions/actions";
import { Pagination } from "./Pagination";
import { Filter } from "./Filter";
import { Sort } from "./Sort";

export class EmployeesContainer extends Component {
    componentDidMount() {
        this.props.requestEmployees();
    }
    render() {
        return (
            <div>
                <Filter />
                <div style={{ overflowX: "auto" }}>
                    <Table>
                        <Header setSort={this.props.setSort} />
                        <Pagination />
                        <TableBody>
                            {this.props.employees.map(employee => (
                                <Employee key={employee.id} employee={employee} />
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <Sort />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        employees: employeesSelector(state),
    };
}

export const Employees = connect(mapStateToProps, {
    requestEmployees,
    setSort,
})(EmployeesContainer);
