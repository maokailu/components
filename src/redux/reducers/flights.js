import { produce } from 'immer';
const initialState = {
    flightList: [],
    selectedFlight: ''
};
const flights = (state, action) =>
    produce(state = initialState, draft => {
        switch (action.type) {
        case 'init':
            draft.flightList = action.flights;
            break;
        case 'filter':
            draft.flightList = action.flights;
            break;
        }
    });
export default flights;
