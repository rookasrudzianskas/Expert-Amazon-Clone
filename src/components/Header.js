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
        {/*    3 links  */}
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