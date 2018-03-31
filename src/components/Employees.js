import React, { Component } from "react";
import { connect } from "react-redux";

import { requestEmployees } from "../actions/requestEmployees";
import { Employee } from "./Employee";
import { Header } from "./Header";
import { Table } from "./styled";
import { actualEmployeesSelector } from "../selectors/actualEmployees";
import { setSort } from "../actions/actions";
import { Pagination } from "./Pagination";

export class EmployeesContainer extends Component {
    componentDidMount() {
        this.props.requestEmployees();
    }
    render() {
        return (
            <div>
                <Table>
                    <div style={{ minHeight: 180 }}>
                        <Header setSort={this.props.setSort} />
                        {this.props.employees.map(employee => (
                            <Employee key={employee.id} employee={employee} />
                        ))}
                    </div>
                    <Pagination />
                </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        employees: actualEmployeesSelector(state),
    };
}

export const Employees = connect(mapStateToProps, {
    requestEmployees,
    setSort,
})(EmployeesContainer);
