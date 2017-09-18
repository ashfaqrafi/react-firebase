import React, { Component } from 'react';

class SeeResponse extends Component {

    adminResponse(){
        return(
            <div>
                <h3 className="mbot-3">
                    <b>Response from our manager against your ticket</b>
                </h3>
                <p>

                </p>

            </div>
        )
    }


    render() {
        return (
            <div>
                <div className="container">
                    {this.adminResponse()}
                </div>
            </div>
        );
    }
}


export default SeeResponse;