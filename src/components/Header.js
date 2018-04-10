import React, { Component } from "react";
import { connect } from "react-redux";

import { setSort } from "../actions/actions";
import { TableHeader, TableHeaderCell, ArrowUp, ArrowDown, Arrows } from "./styled";
import { filters } from "../helpers";

export class HeaderContainer extends Component {
    render() {
        return (
            <TableHeader>
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
                        {filter.text}
                        {this.props.sort.by !== filter.name ? (
                            <Arrows>
                                <div style={{ display: "flex", position: "relative" }}>
                                    <ArrowUp />
                                </div>
                                <div style={{ display: "flex", position: "relative" }}>
                                    <ArrowDown />
                                </div>
                            </Arrows>
                        ) : this.props.sort.order === 1 && this.props.sort.by === filter.name ? (
                            <Arrows>
                                <div style={{ display: "flex", position: "relative" }}>
                                    <ArrowUp />
                                </div>
                            </Arrows>
                        ) : (
                            <Arrows>
                                <div style={{ display: "flex", position: "relative" }}>
                                    <ArrowDown />
                                </div>
                            </Arrows>
                        )}
                    </TableHeaderCell>
                ))}
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
