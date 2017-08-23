import React, { Component } from 'react';
import toastr from 'toastr';
import {Link} from 'react-router';
import 'select2/dist/js/select2.js';
import 'select2/dist/css/select2.css';

class ClientTicketSubmitComponent extends Component {
    componentDidMount(){
        $(".ticket-type").select2({
            minimumResultsForSearch: Infinity
    });
    }

    submitForm(){
        return(
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
        )
    }


    render() {
        return (
            <div>
                <div className="container">
                    {this.submitForm()}
                </div>
            </div>
        );
    }
}


export default ClientTicketSubmitComponent;
