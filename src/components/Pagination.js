import React, { Component } from "react";
import { connect } from "react-redux";

import { setPage } from "../actions/actions";
import { numberOfPagesSelector } from "../selectors/numberOfPages";
import {
    PaginationHeader,
    NextPage,
    PreviousPage,
    PaginationHeaderRow,
    PaginationHeaderCell,
} from "./styled";

class PaginationContainer extends Component {
    render() {
        const { page } = this.props.pagination;
        return (
            <PaginationHeader>
                <PaginationHeaderRow>
                    <PaginationHeaderCell colSpan="6">
                        <PreviousPage
                            disabled={page === 0}
                            onClick={() => this.props.setPage(page - 1)}
                        >
                            {"<"}
                        </PreviousPage>
                        {page + 1} of {this.props.numberOfPages}
                        <NextPage
                            disabled={page === this.props.numberOfPages - 1}
                            onClick={() => this.props.setPage(page + 1)}
                        >
                            {">"}
                        </NextPage>
                    </PaginationHeaderCell>
                </PaginationHeaderRow>
            </PaginationHeader>
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
