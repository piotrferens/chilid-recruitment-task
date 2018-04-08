import React, { Component } from "react";
import { connect } from "react-redux";

import { SortField } from "./styled";
import { setSort } from "../actions/actions";
import { filters } from "../helpers";

class SortContainer extends Component {
    render() {
        return this.props.sort.by !== null ? (
            <SortField>
                Sorting by:{" "}
                {filters.map(filter => (this.props.sort.by === filter.name ? filter.text : null))},
                order: {this.props.sort.order === 1 ? "ascending" : "descending"}
            </SortField>
        ) : null;
    }
}

function mapStateToProps(state) {
    return {
        sort: state.sort,
    };
}

export const Sort = connect(mapStateToProps, { setSort })(SortContainer);
