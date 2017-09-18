import React, { Component } from 'react';
import toastr from 'toastr';
import {Link} from 'react-router';
import TicketCards from '../../../client/ClientHome/components/ticketCrads.jsx';

class SubmitResponse extends Component {
    render(){
        return(
            <div className="mtop-10">
                <div className="form-group">
                    <label htmlFor="exampleInputDescription" className="tkt-response-head">Admin Response</label>
                    <textarea className="form-control br-5" id="exampleInputDescription" rows="9"/>
                </div>
                <div>
                    <div>
                        <form action="#" className="fll">
                            <p>
                                <input type="checkbox" id="test1" />
                                <label htmlFor="test1">Resolved</label>
                            </p>

                        </form>
                        <div>
                            <button type="button" className="flr btn btn-block btn-primary client-add-ticket-bttn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class TicketDescriptionComponent extends Component {
    constructor() {
        super();
        this.state = {
            childVisible: false
        };
        this.giveResponse = this.giveResponse.bind(this);
    }

    giveResponse() {
        this.setState({childVisible: !this.state.childVisible});
    }

    render(){
        return(
            <div className="container">
                <div>
                    <form>
                        <label htmlFor="exampleInputDescription" className="tkt-response-head">Ticket Description</label>
                        <div className="form-group">
                            <label htmlFor="exampleInputTrack1" className="font-2rem">Tracking No:</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputName1" className="font-2rem">Created By:</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputTT1" className="font-2rem">Ticket Type:</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputSubject1" className="font-2rem">Subject:</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputDescription1" className="font-2rem">Description:</label>
                        </div>
                        <div onClick={this.giveResponse}>
                            <button type="button" className="flr btn btn-block btn-primary client-add-ticket-bttn">Give Response</button>
                        </div>
                    </form>
                </div>
                {
                    this.state.childVisible
                        ? <SubmitResponse />
                        : null
                }
            </div>

        )
    }
}

export default TicketDescriptionComponent;
