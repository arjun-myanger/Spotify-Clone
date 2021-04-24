import React, { createContext, useReducer, useContext } from 'react';

export const DataLayerContext = createContext(); //Preparing data layer

export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}  {/* {children} is what is wrapped in the datalayer in the index.js file so in this case the children is App... */}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);

