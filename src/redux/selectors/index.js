import { createSelector } from 'reselect';

const getFlights = state =>
    state.flights;

export const createFlights = createSelector(
    getFlights,
    (
        flights,
    ) => {
        return flights;
    }
);
