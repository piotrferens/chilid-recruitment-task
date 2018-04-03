import React, { Component } from "react";
import { connect } from "react-redux";

import { SortField } from "./styled";
import { setSort } from "../actions/actions";

class SortContainer extends Component {
    render() {
        const filters = [
            { name: "id", text: "id" },
            { name: "firstName", text: "First name" },
            { name: "lastName", text: "Last name" },
            { name: "company", text: "Company" },
            { name: "dateOfBirth", text: "Date of birth" },
            { name: "note", text: "Note" },
        ];
        return (
            <SortField>
                Sorting by:{" "}
                {filters.map(filter => (this.props.sort.by === filter.name ? filter.text : null))},
                order: {this.props.sort.order === 1 ? "ascending" : "descending"}{" "}
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
