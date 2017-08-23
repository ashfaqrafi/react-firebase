import axios from 'axios';

export function getClientTicket(callback) {
    return function (dispatch) {
        dispatch({
            type: 'FETCH_ALL_TICKET_REQUEST',
        });
        axios.get('tickets')
            .then((response) => {
                dispatch({
                    type: 'FETCH_ALL_TICKET_SUCCESS',
                    payload: response.data,
                });
                if (typeof callback === 'function') {
                    callback(null, response.data);
                }
            })
            .catch((err) => {
                dispatch({
                    type: 'FETCH_ALL_TICKET_FAILURE',
                    payload: error.response.data,
                });
                if (typeof callback === 'function') {
                    callback(error.response.data);
                }
            });
    };
}
