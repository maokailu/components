export const initFlights = flights => {
    return {
        type: 'init',
        flights
    };
};
export const filterFlights = options => {
    return {
        type: 'filter',
        options
    };
};
