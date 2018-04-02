import React, { Component } from "react";
import { connect } from "react-redux";
import { Field } from "./styled";
import { setSort } from "../actions/actions";

class SortContainer extends Component {
    render() {
        return (
            <Field>
                Sorting by: {this.props.sort.by}, order:{" "}
                {this.props.sort.order === 1 ? "ascending" : "descending"}{" "}
            </Field>
        );
    }
}

function mapStateToProps(state) {
    return {
        sort: state.sort,
    };
}

export const Sort = connect(mapStateToProps, { setSort })(SortContainer);
