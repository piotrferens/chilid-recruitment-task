import React, { Component } from "react";

import { connect } from "react-redux";
import { setPage } from "../actions/actions";

class PaginationContainer extends Component {
    render() {
        const { actualPage, numberOfPages } = this.props.pagination;
        return (
            <div>
                <button
                    disabled={actualPage === 0}
                    onClick={() => this.props.setPage(actualPage - 1)}
                >
                    -
                </button>
                {actualPage + 1}
                <button
                    disabled={actualPage === numberOfPages - 1}
                    onClick={() => this.props.setPage(actualPage + 1)}
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
    };
}

export const Pagination = connect(mapStateToProps, { setPage })(PaginationContainer);
