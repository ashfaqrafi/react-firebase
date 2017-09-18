import React, { Component } from 'react';
import toastr from 'toastr';
import {Link} from 'react-router';
import TicketCards from '../../../client/ClientHome/components/ticketCrads.jsx';

class TicketTableComponent extends Component {

    getStatus(status){

        console.log('>> ', status)

        if(status == 'Resolved') {
            return 'card-resolve'
        }
        else  return 'not-resolve'
    }

    TableBody(){
        let tableView = TicketCards.map((t,i)=>{
            return(
                <tr className="tr-col" key={t.No  } >
                    <td className="track-no"><Link to="/admin/ticket-description">{t.No}</Link></td>
                    <td>{t.user}</td>
                    <td>{t.type}</td>
                    <td>{t.subject}</td>
                    <td>
                        <div className={`status-font ${this.getStatus(t.status)}`}>{t.status}</div>
                    </td>
                </tr>
            )
        })
            return tableView
        }


    render() {
        return (
            <div>
                <div className="table-responsive">
                    <table className="table table-bordered table-condensed">
                        <thead>
                        <tr>
                            <th>Tracking No.</th>
                            <th>Created By</th>
                            <th>Type</th>
                            <th>Subject</th>
                            <th>Status</th>
                        </tr>
                        </thead>

                        <tbody>
                            {this.TableBody()}
                        </tbody>

                    </table>
                </div>

            </div>
        );
    }
}

export default TicketTableComponent;
