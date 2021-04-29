import React from "react";
import "./styles/Header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="header">

            {/*   Logo on the left -> img   */}

            <Link>
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" to="/" className="header__logo" alt=""/>
            </Link>


        {/*    search box   */}
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