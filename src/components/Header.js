import React from "react";
import "./styles/Header.css"
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "../StateProvider";
import {auth} from "../firebase";

function Header() {
    // I access the data layer from StateProvider js, by accessing the basket object with hook - useStateValue
    // it destructures to the state, asnd the method dispatch
    // the state is current state of the data layer, what actually is in it now, if I desctructure it I get {basket=[]}
    // dispatch is like a gun, then I want to add something on data layer, or to change it, I shoot to it and the data changes or something adds
    // the things I shoot, is the actions
    // I can shoot it to the basket, and then straight from the basket, in any way
    // other way to think, I am appending the data and removing data from the state in the data layer
    // at this point, I do not need to do any manipulation, just get the current state, meaning, how many items are in the basket
    const [{ basket, user}] = useStateValue();

    // the login function, to check if there is user connected, if not just sign it out from the amazon
    const login = () => {
        // if there is a user, we want to sign it out
        if (user) {
            // sign outs the user
            auth.signOut()
        }
    }


    return (
        <nav className="header">

            {/*   Logo on the left -> img   */}

            <Link to="/" >
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt=""/>
            </Link>


        {/*    search box   */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

        {/*    end of search box    */}
        {/*    3 links  */}

            <div className="header__nav">
            {/*    1 link */}
            {/* if there is no user logged in, so just then to sign in*/}
                <Link to={!user && "/login"} className="header__link">
                    {/* and this login function is going to check out, if the user is logged in */}
                    {/* it is going to leg the user out*/}
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello, {user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sing Out' : 'Sing In'}</span>
                    </div>
                </Link>

            {/*    end of 1 link */}

            {/*     2 link */}

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

            {/*    end of 2 link */}

            {/*     3 link */}

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

            {/*    end of 3 link */}

            {/*     4 link */}

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">

                    {/*    shopping basket icon */}

                        <ShoppingBasketIcon />

                    {/*    Number of items in the basket    */}
                    {/*    I have my basket in my data layer, and am I keep adding Items I just see adding one by one. */}
                    {/*     everything is stored in the data layer state, and once I add, the datalayer updates */}
                    {/*     and all the items which value has changed decreased or increased, just updates in the all components */}
                    {/*    which are using that data*/}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            {/*     end of 4 link */}


            </div>

        {/*    end of 3 links   */}

        </nav>
    );
}

export default Header;












// import React from "react";
// import "./styles/Header.css"
// const Header = () => {
//     return (
//         <div>
//             <h1>Navbar</h1>
//         </div>
//     )
// }
//
// export default Header;