import React, { Component } from "react";
import { connect } from "react-redux";

import { setSort } from "../actions/actions";
import { TableHeader, TableHeaderCell, ArrowUp, ArrowDown, Arrows, ArrowContainer } from "./styled";
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
                        <Arrows>
                            {this.props.sort.by !== filter.name ? (
                                <React.Fragment>
                                    <ArrowContainer>
                                        <ArrowUp />
                                    </ArrowContainer>
                                    <ArrowContainer>
                                        <ArrowDown />
                                    </ArrowContainer>
                                </React.Fragment>
                            ) : (
                                <ArrowContainer>
                                    {this.props.sort.order === 1 ? <ArrowUp /> : <ArrowDown />}
                                </ArrowContainer>
                            )}
                        </Arrows>
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
