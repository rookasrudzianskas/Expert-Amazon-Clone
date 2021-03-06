import React from "react";
import {useStateValue} from "../StateProvider";
import "./styles/Checkout.css";
import CheckoutProduct from "./CheckourProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
    // we are going to need basket to count the amount to pay
    // dispatch is just for the cases, then you need to manipulate the data
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            {/* the left side is everything what goes to the left, including the ad, items in the basket, and on the other side*/}
            {/* will be the subtotal to count money*/}
            <div className="checkout__left">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
            {/* we check if the basket, in the State Provide length is 0, so your basket is empty*/}
            {/*if not, so we show that there is items, and render each one with map function per each item*/}
            {basket?.length === 0 ? (
                <div>
                    <h2>Your shopping basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more items, just click "Add to basket" next to the item
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                {/*    list out all the checkout products*/}
                {/*    go per every item in the basket and list it in this component */}
                    {basket?.map((item) => (
                        // we pass the props to form the each product you have in the basket

                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />

                    ))}

                </div>
                )}
            </div>
        {/*     the end of the left side */}

            {/* the start of the right side */}
            {/* the function to show the money and the button */}
            {
                basket.length > 0 && (
                // the right section is going to appear
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                )
            }
        </div>
    );
}

export default Checkout;