/*
 * This reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 */

export const allTicketReducer = (state = [], action) => {
    switch (action.type) {
        case 'TICKET_REQUEST':
            return state;
        case 'TICKET_SUCCESS':
            return action.payload.data;
        case 'TICKET_FAILURE':
            return state;
        default:
            return state;
    }
};
