import React, { Component } from "react";
import { connect } from "react-redux";

import { setFilter, setSearch } from "../actions/actions";
import { FilterHeader } from "./styled";

class FilterContainer extends Component {
    onSelect = event => {
        this.props.setFilter(event.target.value);
    };

    onChange = event => {
        this.props.setSearch(event.target.value);
    };

    render() {
        return (
            <FilterHeader>
                <select value={this.props.selected} onChange={this.onSelect}>
                    <option disabled />
                    <option value="firstName">First name</option>
                    <option value="lastName">Last name</option>
                    <option value="company">Company</option>
                    <option value="dateOfBirth">Date of birth</option>
                    <option value="note">Note</option>
                </select>
                {this.props.selected !== "dateOfBirth" ? (
                    <input type="text" value={this.props.searchPhrase} onChange={this.onChange} />
                ) : (
                    <input type="date" onChange={this.onChange} value={this.props.searchPhrase} />
                )}
            </FilterHeader>
        );
    }
}

function mapStateToProps(state) {
    return {
        selected: state.filter.selected,
        searchPhrase: state.filter.searchPhrase,
    };
}

export const Filter = connect(mapStateToProps, { setFilter, setSearch })(FilterContainer);
