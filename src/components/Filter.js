import React, { Component } from "react";
import { connect } from "react-redux";

import { setFilter, setSearch } from "../actions/actions";
import { FilterHeader } from "./styled";

class FilterContainer extends Component {
    onChange = action => {
        return event => {
            action(event.target.value);
        };
    };

    render() {
        return (
            <FilterHeader>
                <select value={this.props.selected} onChange={this.onChange(this.props.setFilter)}>
                    <option disabled />
                    <option value="firstName">First name</option>
                    <option value="lastName">Last name</option>
                    <option value="company">Company</option>
                    <option value="dateOfBirth">Date of birth</option>
                    <option value="note">Note</option>
                </select>

                <input
                    type={this.props.selected !== "dateOfBirth" ? "text" : "date"}
                    value={this.props.searchPhrase}
                    onChange={this.onChange(this.props.setSearch)}
                />
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
