import React, { Component } from "react";
import { connect } from "react-redux";

import { setFilter, setSearch } from "../actions/actions";
import { FilterHeader, SelectFilter } from "./styled";
import { filters } from "../helpers";

class FilterContainer extends Component {
    onChange = action => {
        return event => {
            action(event.target.value);
        };
    };

    render() {
        return (
            <FilterHeader>
                <SelectFilter
                    value={this.props.selected}
                    onChange={this.onChange(this.props.setFilter)}
                >
                    <option disabled />
                    {filters.map(filter => (
                        <option key={filter.name} value={filter.name}>
                            {filter.text}
                        </option>
                    ))}
                </SelectFilter>
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
