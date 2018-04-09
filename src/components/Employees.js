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

export class EmployeesContainer extends Component {
    componentDidMount() {
        this.props.requestEmployees();
    }
    render() {
        return (
            <div>
                <Filter />
                <Table>
                    <div
                        style={{
                            height: 250,
                            overflow: "auto",
                            width: 800,
                            margin: "0 auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>
                            <Header setSort={this.props.setSort} />
                            <TableBody>
                                {this.props.employees.map(employee => (
                                    <Employee key={employee.id} employee={employee} />
                                ))}
                            </TableBody>
                        </div>
                        <Pagination />
                    </div>
                </Table>
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
