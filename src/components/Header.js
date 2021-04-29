import React from "react";
import "./styles/Header.css"
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Header = () => {
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

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello, Rokas</span>
                        <span className="header__optionLineTwo">Sing In</span>
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
                        <span>0s</span>
                    </div>
                </Link>

            {/*     end of 4 link */}


            </div>

        {/*    end of 3 links   */}

        {/*    Basket icon with the number   */}

        </nav>
    )
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