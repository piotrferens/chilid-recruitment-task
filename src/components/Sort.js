import React, { Component } from "react";
import { connect } from "react-redux";
import { SortField } from "./styled";
import { setSort } from "../actions/actions";

class SortContainer extends Component {
    render() {
        return (
            <SortField>
                Sorting by: {this.props.sort.by}, order:{" "}
                {this.props.sort.order === 1 ? "ascending" : "descending"}{" "}
            </SortField>
        );
    }
}

function mapStateToProps(state) {
    return {
        sort: state.sort,
    };
}

export const Sort = connect(mapStateToProps, { setSort })(SortContainer);
