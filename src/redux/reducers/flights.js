import { produce } from 'immer';
const initialState = {
    flightList: [],
    selectedFlight: ''
};

const filterFlights = (flightList, options) => {
    const choices = Object.getOwnPropertyNames(options).map(typeName => {
        return options[typeName].map(item => item.status);
    });
    const filterFlights = flightList.filter(flight => {
        let result = false;
        const choicesNames =  Object.getOwnPropertyNames(choices);
        if (choicesNames.length) {
            result = choicesNames.reduce((prev, curr) => {
                prev && choices[curr].includes(flight[curr]);
            }, true);
        }
        return result;
    });
    return filterFlights;
};

const flights = (state, action) =>
    produce(state = initialState, draft => {
        switch (action.type) {
        case 'init':
            draft.flightList = action.flights;
            break;
        // eslint-disable-next-line no-case-declarations
        case 'filter':
            draft.flightList = filterFlights(state.flightList, action.options);
            break;
        }
    });
export default flights;
