// Depreciated but kept for notes. 11/19/2023

import { initialState } from "./ResrvationStore";

function ReservationReducer (state, action) {
    switch (action.type) {
        case "remove_time":
            return state.filter((time) => time !== parseInt(action.time));
        case "get_time":
            return state;
        case "initial_time":
            return initialState;
        default:
            return state;
    }
}

export default ReservationReducer;