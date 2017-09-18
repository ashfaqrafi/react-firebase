import React, { Component } from 'react';
import toastr from 'toastr';
import Rodal from 'rodal';
import {Link} from 'react-router';
import 'select2/dist/js/select2.js';
import 'select2/dist/css/select2.css';
// include styles
import 'rodal/lib/rodal.css';

import ClientTickets from './ClientTickets.jsx';
// import ClientTicketSubmitComponent from './addTicket.jsx';

class ClientHomeComponent extends Component {
    componentDidMount(){
        $(".ticket-type").select2({
            minimumResultsForSearch: Infinity
        });

        toastr.info('Dear Client, Welcome to your Ticketing System Dashboard.');
    }

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            animation: 'flip'
        };
    }

    show(animation) {
        this.setState({
            animation: true,
            visible: true
        });
    }

    hide() {
        this.setState({ visible: false });
    }

    addRodal(){
        return(
            <Rodal visible={this.state.visible}
                   onClose={this.hide.bind(this)}
                   animation={this.state.animation}
                   className="add-ticket">
                <div>
                    <h3 className="mbot-3">
                        <b>Ticket Submit Form</b>
                    </h3>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1" className="mr-1">Ticket Type</label>
                            <select className="ticket-type">
                                <option value="FB">Feedback</option>
                                <option value="CM">Complaint</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputSubject">Subject</label>
                            <input type="text" className="form-control br-5" id="exampleInputSubject"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputDescription">Description</label>
                            <textarea className="form-control br-5" id="exampleInputDescription" rows="9"/>
                        </div>

                        <button type="submit" className="btn btn-default ticket-submit-bttn">Submit</button>
                    </form>

                </div>
            </Rodal>
        )
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div>
                        <h3 className="client-ticket-header">
                            Your Tickets:
                        </h3>

                         <span>
                             <button
                                 type='button'
                                 id="addnewBttn"
                                 className='btn btn-block btn-primary client-add-ticket-bttn'
                                 onClick={this.show.bind(this)}>
                            Add new Ticket
                        </button>
                         </span>
                        {this.addRodal()}
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
