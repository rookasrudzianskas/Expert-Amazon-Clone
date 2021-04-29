import React from "react";
import "./styles/Header.css"
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

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
                        <span>Hello, Rokas</span>
                        <span>Sing In</span>
                    </div>
                </Link>

            {/*    end of 1 link */}

            {/*     2 link */}

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span>Returns</span>
                        <span>& Orders</span>
                    </div>
                </Link>

            {/*    end of 2 link */}

            {/*     3 link */}

                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span>Your</span>
                        <span>Prime</span>
                    </div>
                </Link>

            {/*    end of 3 link */}

            {/*     4 link */}

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