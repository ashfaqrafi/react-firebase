import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AdminDashboardComponent from '../components/AdminDashboard.jsx';

import { getAllTickets } from '../actions/getAllTickets.js';

class AdminDashboardContainer extends Component {
    componentWillMount() {
        this.props.getAllTickets();
    }

    render() {
        return (
            <AdminDashboardComponent
                allTicket={this.props.allTicket} />
        );
    }
}

// Get apps store and pass it as props to BlogContainer
//  > whenever store changes, the BlogContainer will automatically re-render
// "store.allBlog" is set in reducers.js
function mapStateToProps(store) {
    return {
        allTicket: store.allTicket,
    };
}

// Get actions and pass them as props to to BlogContainer
//  > now BlogContainer has this.props.getAllBlog
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getAllTickets: getAllTickets,
    }, dispatch);
}

// We don't want to return the plain BlogContainer (component) anymore,
// we want to return the smart Container
//  > BlogContainer is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(AdminDashboardContainer);