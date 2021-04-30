import React from "react";
import "./styles/Login.css"
import {Link} from "@material-ui/core";

const Login = () => {
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
                    <input type="text"/>

                    <h5>Password</h5>
                    <input type="text"/>

                    <button>Sign In</button>


                    <p>
                        By signing-in you agree to Amazon's Conditions of Use & Sale. Please
                        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                        Notice.
                    </p>

                    <button>Create Your Amazon Account</button>
                </form>

            </div>

        </div>
    )
}
export default Login;