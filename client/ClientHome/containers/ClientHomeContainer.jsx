import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ClientHomeComponent from '../components/ClientHomeComponent.jsx';

import { getClientTicket } from '../actions/getClientTicket.js';

class ClientHomeContainer extends Component {
    componentWillMount() {
        this.props.getClientTicket();
    }

    render() {
        return (
            <ClientHomeComponent
                allClientTicket={this.props.allClientTicket} />
        );
    }
}

// Get apps store and pass it as props to BlogContainer
//  > whenever store changes, the BlogContainer will automatically re-render
// "store.allBlog" is set in reducers.js
function mapStateToProps(store) {
    return {
        allClientTicket: store.allClientTicket,
    };
}

// Get actions and pass them as props to to BlogContainer
//  > now BlogContainer has this.props.getAllBlog
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        getClientTicket: getClientTicket,
    }, dispatch);
}

// We don't want to return the plain BlogContainer (component) anymore,
// we want to return the smart Container
//  > BlogContainer is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(ClientHomeContainer);
