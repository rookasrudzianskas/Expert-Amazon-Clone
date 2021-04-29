import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";


function App() {
  return (
      <Router>
        <div className="app">

            <Switch>
                <Route path="/checkout" >
                    <Header />
                    <h1>Check out</h1>
                </Route>

                <Route path="/login" >
                    <h1>Login page</h1>
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
