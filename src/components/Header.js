import React, { Component } from "react";
import { connect } from "react-redux";

import { setSort } from "../actions/actions";
import { TableHeader, TableHeaderCell, TableHeaderRow, ArrowUp, ArrowDown } from "./styled";
import { filters } from "../helpers";

export class HeaderContainer extends Component {
    render() {
        return (
            <TableHeader>
                <TableHeaderRow>
                    {filters.map(filter => (
                        <TableHeaderCell
                            key={filter.name}
                            onClick={() => this.props.setSort(filter.name)}
                            title={
                                this.props.sort.order === 1 && this.props.sort.by === filter.name
                                    ? "Sort descending"
                                    : "Sort ascending"
                            }
                        >
                            {this.props.sort.by === filter.name ? (
                                this.props.sort.order === 1 ? (
                                    <ArrowUp />
                                ) : (
                                    <ArrowDown />
                                )
                            ) : null}
                            {filter.text}
                        </TableHeaderCell>
                    ))}
                </TableHeaderRow>
            </TableHeader>
        );
    }
}

function mapStateToProps(state) {
    return {
        sort: state.sort,
    };
}

export const Header = connect(mapStateToProps, { setSort })(HeaderContainer);
