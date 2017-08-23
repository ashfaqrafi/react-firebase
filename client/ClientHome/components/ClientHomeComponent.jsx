import React, { Component } from 'react';
import toastr from 'toastr';
import { Link } from 'react-router';
import ClientTickets from './ClientTickets.jsx';


class ClientHomeComponent extends Component {
    componentDidMount() {
        toastr.info('Dear Client, Welcome to your Ticketing System Dashboard.');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        <h3 className="client-ticket-header">
                            Your Tickets:
                        </h3>
                        <button
                            type='button'
                            id="addnewBttn"
                            className='btn btn-block btn-primary client-add-ticket-bttn'>
                            Add new Ticket
                        </button>
                    </div>
                    <div className='row'>
                        <div className='col-xs-12'>
                            <ClientTickets/>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default ClientHomeComponent;
