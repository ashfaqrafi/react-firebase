import React, { Component } from 'react';
import toastr from 'toastr';
import {Link} from 'react-router';

import TicketCards from './ticketCrads.jsx';

class ClientTickets extends Component {

    renderCardList(){
        let ticketCard = TicketCards.map((c,i)=>{
            return (
                <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 fn_cardview fn-dualcard">
                    <div className="fn-card fn-card_bs fnc" >
                        <div className="fnc_pro">
                            <div className="fnc_full pad1">
                                <div>
                                    <div className="client-card-count">
                                        {i+1}
                                    </div>
                                    <div className="client-card-status card-resolve">
                                        Resolved
                                    </div>
                                </div>
                                <div className="mtop-4">
                                    <p className="fn-st mtop-1">
                                        <span>Type:&nbsp;</span>
                                        <span className="fn-title pb1">
                                        {c.type}
                                    </span>
                                    </p>

                                    <p className="fn-st">
                                        <span>Subject:&nbsp;</span>
                                        <span className="fn-id fn-des pb1">{c.subject}</span>
                                    </p>

                                    <p className="fn-st">Description:</p>
                                    <div className="fn-status fn-des pb1 max-h-18 text-truncate">{c.description}</div>
                                    {/*<Link to="#">Details</Link>*/}
                                    <div>
                                        <button
                                            type='button'
                                            id="seeResponse"
                                            className='btn btn-block client-seeresponse-bttn'>
                                            See Response
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return ticketCard
    }


    render() {
        return (
            <div>
                <div className="row">
                    {this.renderCardList()}
                </div>
            </div>
        );
    }
}


export default ClientTickets;
