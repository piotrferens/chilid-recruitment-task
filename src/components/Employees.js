import React, { Component } from "react";
import { connect } from "react-redux";

import { requestEmployees } from "../actions/requestEmployees";
import { Employee } from "./Employee";
import { Header } from "./Header";
import { Table } from "./styled";
import { sortEmployeesSelector } from "../selectors/sortEmployees";
import { setSort } from "../actions/actions";

export class EmployeesComponent extends Component {
    componentDidMount() {
        this.props.requestEmployees();
    }
    render() {
        return (
            <div>
                <Table>
                    <Header setSort={this.props.setSort} />
                    {this.props.employees.map(employee => (
                        <Employee key={employee.id} employee={employee} />
                    ))}
                </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        employees: sortEmployeesSelector(state),
    };
}

export const Employees = connect(mapStateToProps, {
    requestEmployees,
    setSort,
})(EmployeesComponent);
