// setting data layer to get all the information

// it is like a layer to avoid prop drilling, meaning, if you want to pass data down or top per many components, it travels thourg the data layer
//which automatically updates the data, and for all components which are using that data, updates to the newest changes
// basically like a invisible component storing the data about something, and then any component from the app needs that data, it can
// access it directly and push new updates if needed directly\

// We need this to track the basket things


import {createContext, useReducer, useContext} from "react";

// this is the data layer
export const StateContext = createContext();

// BUILDING THE PROVIDER, to make the access to this data for all the components

// initial state is how the data layer looks like, then the app initially loads
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>

        {/* children is referring to the app, because this State Provider is the highest level, and the app and so on goes as the lower components*/}

        {children}
    </StateContext.Provider>
);

// THis is is how we use the reducer in the inside of the any component of the app. DOes not matter where, it is accessible anywhere
export const useStateValue = () => useContext(StateContext);