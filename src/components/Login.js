import React from "react";
import "./styles/Login.css"
import {Link} from "@material-ui/core";

const Login = () => {

    // functions to do login and the registering

    // Login

    const login = (event) => {
        event.preventDefault(); // this stops refresing
        // login logic there


    }

    // REgister

    const register = (event) => {
        event.preventDefault(); // this stops refreshing
        // registering logic there
    }



    return (
        <div className="login">

            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt=''
                />
            </Link>
            {/* alll the login things go to this div*/}
            <div className="login__container">
                {/* sign in there*/}
                <h1>Sign In</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="email"/>

                    <h5>Password</h5>
                    <input type="password"/>

                    <button onClick={login} type="submit" className="login__signInButton"s>Sign In</button>


                    <p className="login__paragraph">
                        By signing-in you agree to Amazon's Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                        Notice.
                    </p>

                    <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
                </form>

            </div>

        </div>
    )
}
export default Login;