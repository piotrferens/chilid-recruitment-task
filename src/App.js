import React, { Component } from "react";
import { connect } from "react-redux";

import { requestEmployees } from "./actions/actions";

class AppComponent extends Component {
    componentDidMount() {
        this.props.requestEmployees();
    }
    render() {
        return (
            <div>
                <h1>Hello React</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employees,
    };
}

export const App = connect(mapStateToProps, {
    requestEmployees,
})(AppComponent);
