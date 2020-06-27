export const initFlights = flights => {
    return {
        type: 'init',
        flights
    };
};
export const filterFlights = choices => {
    return {
        type: 'fliter',
        choices
    };
};
