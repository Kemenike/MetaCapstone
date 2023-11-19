// Depreciated but kept for notes. 11/19/2023

import React, { createContext, useEffect, useReducer } from 'react';
import {default as Reducer} from './ReservationReducer';


function ReservationStore ({ children }) {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <ReservationContext.Provider value={[state, dispatch]}>
            {children}
        </ReservationContext.Provider>
    );
}

export const initialState = [17, 18, 19, 20, 21, 22];
export const ReservationContext = createContext(initialState);
export default ReservationStore;