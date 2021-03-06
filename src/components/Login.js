import React, {useState} from "react";
import "./styles/Login.css"
import {Link} from "@material-ui/core";
import {auth} from "../firebase";
import { useHistory} from "react-router-dom";

const Login = () => {
// to store the email and password data
    // history to redirect the user after sign up or the login to the differnt page, using history
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // we need to have the listener which keeps track of what is going on, if the user is logged in, or not, what is going on


    // functions to do login and the registering

    // Login

    const login = (event) => {
        event.preventDefault(); // this stops refresing
        // login logic there
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //we do this, if it is successful, if we are in then mode
            // Logged in successfully, redirect to the homepage
                // that is it, just that easy, goes to the homepage
                history.push('/');
        })
            /*
             if accidentally the error occurs, this catch will be fired with the message
            */
            .catch(e => alert(e.message));
    };

    // Register

    const register = (event) => {
        event.preventDefault(); // this stops refreshing
        // registering logic there
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // created the user and logged in and redirect to the homepage
                // redirects to the homapge
                history.push('/');

            })
            .catch((e) => alert(e.message));

    };



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
                    {/* then I type in, it grabs what I write and push it to the email state, and shows will the things which already ar there*/}
                    <input value={email} onChange={event => setEmail((event.target.value))} type="email"/>

                    <h5>Password</h5>
                    <input value={password}  onChange={event => setPassword((event.target.value))}  type="password"/>

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