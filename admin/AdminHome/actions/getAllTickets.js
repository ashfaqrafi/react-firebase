import axios from 'axios';

export function getAllTickets(callback) {
    return function (dispatch) {
        dispatch({
            type: 'TICKET_REQUEST',
        });
        axios.get('tickets')
            .then((response) => {
                dispatch({
                    type: 'TICKET_SUCCESS',
                    payload: response.data,
                });
                if (typeof callback === 'function') {
                    callback(null, response.data);
                }
            })
            .catch((err) => {
                dispatch({
                    type: 'TICKET_FAILURE',
                    payload: error.response.data,
                });
                if (typeof callback === 'function') {
                    callback(error.response.data);
                }
            });
    };
}
