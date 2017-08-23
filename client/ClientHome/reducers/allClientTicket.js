/*
 * This reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 */

export const allClientTicketReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_TICKET_REQUEST':
            return state;
        case 'FETCH_ALL_TICKET_SUCCESS':
            return action.payload.data;
        case 'FETCH_ALL_TICKET_FAILURE':
            return state;
        default:
            return state;
    }
};
