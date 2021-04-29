import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";


function App() {
  return (
      <Router>
        <div className="app">

            <Switch>
                <Route path="/checkout" >
                    <h1>Check out</h1>
                </Route>

                <Route path="/login" >
                    <h1>Login page</h1>
                </Route>

                {/* Home url, if all above broken */}

                <Route path="/" >
                    <Header />
                    <h1>Home page component</h1>
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
