import React, { Component } from "react";
import { connect } from "react-redux";

import { setPage } from "../actions/actions";
import { numberOfPagesSelector } from "../selectors/numberOfPages";

class PaginationContainer extends Component {
    render() {
        const { page } = this.props.pagination;
        return (
            <div>
                <button disabled={page === 0} onClick={() => this.props.setPage(page - 1)}>
                    -
                </button>
                {page + 1}
                <button
                    disabled={page === this.props.numberOfPages - 1}
                    onClick={() => this.props.setPage(page + 1)}
                >
                    +
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pagination: state.pagination,
        numberOfPages: numberOfPagesSelector(state),
    };
}

export const Pagination = connect(mapStateToProps, { setPage })(PaginationContainer);
