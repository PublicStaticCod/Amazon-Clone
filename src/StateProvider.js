import React, { createContext, useContext, useReducer } from 'react';

// Prepration the dataLayer
export const StateContext = createContext();

// Wrap our app and Proviede the DatA LAYER
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
