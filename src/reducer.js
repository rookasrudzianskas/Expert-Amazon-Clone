
// we make the initial state object, and export it, to be able to use anywhere in the app
// this is how the store lookks then the app loads, and nothing has changed, whole clean store
// import Product from "./components/Product";
// import React from "react";

export const initialState = {
    basket: [{
        id: "123123",
        title: 'The lean Startup, How Constant Innovation Creates Radically Successful Business Paperback',
        price: 29.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
        rating: 5,
    }],
};

// everything in the state provider is like the state and the action is like the action ie to remove an item from the basket
// for state it could be like ie function reducer(state, action)

const reducer = (state, action)  => {
    console.log(action);
    // check again bunch of cases, in this case action.type
    switch (action.type) {
        // this case shows what the action is, for example it is like an action name and so on
        case 'ADD_TO_BASKET':
            // Logic for adding item to the basket
            // in this case we just return the same state as it arrived to the reducer action
            return {
                // I return the current state, as it is in the ...state
                ...state,
                // but I change the basket which is in the initial state basket: [], I get the previous basket and add to it the action item from
                // product.js, which was called by pressing the button add to card. Basically this is it, I call the addtocard in product.js,
                // shoot the action with payload to the data layer, which updates it is state, byy using the reducer, case ADD_TO_BASKET
                // and returns the new state, means the basket
              basket:  [...state.basket, action.item],
            };

        // the action number two
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from the basket

            return { ...state }


        // this is the default one, so it is going to excecute if the ADD_TO_BASKET or REMOVE_FROM_BASKET, does not execute
        // the default one is going to execute and just return the current state, meaning the store
        // this is all, if the default one excecutes, so just leave it is as it is, and that is the end for now
        default:
            return state;
    }
}

// This lets us to use the reducer outside, anywhere in the app, meaning I can use the function reducer, with all the logics inside, anywhere in the app
// in any component, does not mean, if it in the top, or it is in the bottom, anywhere
export default reducer;