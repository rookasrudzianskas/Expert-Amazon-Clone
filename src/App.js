import './App.css';
import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";

function App() {
    // connecting to the data layer
    const [{user}, dispatch] = useStateValue();

    // a piece of code which runs on a given condition <<<<< POWERFUL
    useEffect(() => {
        // it is going to run once, then the component initially loads
        // this means, it is going to listen for every auth state changing
        // authUser is just what the onAuthStateChanged gives back to us
       const unsubscribe = auth.onAuthStateChanged((authUser) => {
            // basically this is how we determine if the user is logged in or logged out.
            // this listens for the auth stage change, and checks if there is a user, means it is logged in, if not, so to the else block of code
            if(authUser) {
                // the user is logged in
                // we shoot an action
                // if the user is logged in, we push it to the data layer, and update it
                // the dispatch means, we shoot an action, to the data layer, with the action type, which searches for the case in the reducer
                // it founds the set user one, and sets the user, to the object which was received from the onAuthStanged, shooted as the payload
                // to the data layer
                dispatch({
                    // I define the type of the action, which gets passed to the reducer, in this case the SeTUSER, and the payload, which is
                    // the user object, which was received from the onAuthStateChanged listener
                    type: "SET_USER",
                    user: authUser
                })
            } else {
                // the user is logged out
                // if the on authStateChanged comes back, that there is no logged in user,so we shoot the action to the data layer
                // with the payload the user is null and this means, the user in the data layer is going to be updated as nnull, meaning
                // there is no logged in user anymore
                dispatch({
                    type: "SET_USER",
                    user: null
                });
            }
        });
        console.log('🙎‍♂️', user)

        return () => {
            // cleanup operations goes there
            // this is going to just detach the listener, because for every iteration we do not want to keep the old listener active
            // it would drain browser resources
            // This is going to detach the old one, the current one, and attach the new fresh listener
            unsubscribe();
        }

    }, []);

  return (
      <Router>
        <div className="app">

            <Switch>
                <Route path="/checkout" >
                    <Header />
                    <Checkout />
                </Route>

                <Route path="/login" >
                    <Login />
                </Route>

                {/* Home url, if all above broken */}

                <Route path="/" >
                    <Header />
                    <Home />
                </Route>

            </Switch>



        {/*    local amazon.com     */}
        {/*    localhost.com/checkout   */}
        {/*    localhost.com/login   */}

        </div>
      </Router>
  );
}

export default App;
