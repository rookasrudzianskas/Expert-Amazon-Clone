import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";


function App() {
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
