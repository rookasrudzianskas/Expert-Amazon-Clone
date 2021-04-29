
// we make the initial state object, and export it, to be able to use anywhere in the app
// this is how the store lookks then the app loads, and nothing has changed, whole clean store
export const initialState = {
    basket: [],
};

// everything in the state provider is like the state and the action is like the action ie to remove an item from the basket
// for state it could be like ie function reducer(state, action)

function reducer(state, action) {

    // check again bunch of cases, in this case action.type
    switch (action.type) {
        // this case shows what the action is, for example it is like an action name and so on
        case 'ADD_TO_BASKET':
            // Logic for adding item to the basket

            break;
        // the action number two
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item from the basket

            break;

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