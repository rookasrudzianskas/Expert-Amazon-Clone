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
    const [{basket}, dispatch] = useStateValue();

    // a piece of code which runs on a given condition <<<<< POWERFUL
    useEffect(() => {
        // it is going to run once, then the component initially loads
        // this means, it is going to listen for every auth state changing
        // authUser is just what the onAuthStateChanged gives back to us
        auth.onAuthStateChanged((authUser) => {
            // basically this is how we determine if the user is logged in or logged out.
            // this listens for the auth stage change, and checks if there is a user, means it is logged in, if not, so to the else block of code
            if(authUser) {
                // the user is logged in
                // we shoot an action
                dispatch({
                    // I define the type of the action, which gets passed to the reducer, in this case the SeTUSER, and the payload, which is
                    // the user object, which was received from the onAuthStateChanged listener
                    type: "SET_USER",
                    user: authUser
                })
            } else {
                // the user is logged out
            }
        })
    }, [])

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
