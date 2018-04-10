import React, { Component } from "react";
import { connect } from "react-redux";

import { setPage } from "../actions/actions";
import { pagesSelector } from "../selectors/pagesSelector";
import { Page, ChangePage, PaginationFooter } from "./styled";

class PaginationContainer extends Component {
    render() {
        const { page } = this.props.pagination;
        return (
            <PaginationFooter>
                <ChangePage disabled={page === 0} onClick={() => this.props.setPage(page - 1)}>
                    {"< back "}
                </ChangePage>
                {this.props.pages.map(x => (
                    <Page key={x} isActive={page === x} onClick={() => this.props.setPage(x)}>
                        {x + 1}
                    </Page>
                ))}
                <ChangePage
                    disabled={page === this.props.pages.length - 1}
                    onClick={() => this.props.setPage(page + 1)}
                >
                    {" next >"}
                </ChangePage>
            </PaginationFooter>
        );
    }
}

function mapStateToProps(state) {
    return {
        pagination: state.pagination,
        pages: pagesSelector(state),
    };
}

export const Pagination = connect(mapStateToProps, { setPage })(PaginationContainer);
