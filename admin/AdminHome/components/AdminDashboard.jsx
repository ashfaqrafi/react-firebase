import React, { Component } from 'react';
import toastr from 'toastr';
import {Link} from 'react-router';
import TicketTableComponent from './TicketTable.jsx';

class AdminDashboardComponent extends Component {
    componentDidMount(){
        toastr.info('Dear Admin, Welcome to your Ticketing System Dashboard.');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        <h3 className="client-ticket-header">
                            List of Clients' Tickets:
                        </h3>
                    </div>
                    <div className='row'>
                        <div className='col-xs-12'>
                            <TicketTableComponent/>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default AdminDashboardComponent;
