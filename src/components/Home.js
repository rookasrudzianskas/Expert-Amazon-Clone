import React from "react";
import "./styles/Home.css";
import Product from "./Product";

const Home = () => {
    return (
        <div className="home">

            {/* banner amazon prime */}

            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

            {/* end of amazon banner   */}

        {/*    Products  id, title, price, rating, image    */}

            {/* Product */}
            <div className="home__row">
                <Product id="123123"
                         title='The lean Startup, How Constant Innovation Creates Radically Successful Business Paperback' price={29.99}
                         image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                         rating={5}/>

                <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />



            </div>

            {/* Product */}


        {/*    end of products  */}
        </div>
    );
}

export default Home;