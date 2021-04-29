import React from "react";
import "./styles/CheckoutProduct.css";
import {useStateValue} from "../StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
    // we need to access the store, so we use this: 🙌
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from the basket
    }


    return (
        <div className="checkoutProduct">
            {/* image    */}

            <img className="checkoutProduct__image" src={image} alt=""/>

            {/* the end of the image and the start of the product description   */}

            {/* the information about the product except the image  */}

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                {/* the stars mapping, according to the filling of array */}
                {/* the array, which is formed of how many ratings the product has, is filled with nothing, and then mapped per each value*/}
                {/* and attached the ⭐ symbol, just that easy! */}

                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </div>

            {/*    the end of start showing div */}

            {/*     the button to remove from the basket, also goes per reducer action, with typer REMOVE_FROM_BASKET */}

                {/* removing from the basket using reducer */}
                {/* once I click remove from the basket , it takes the id from the item, which you clicked  */}
                {/* and tries to find it in the basket array, the data layer state */}
                {/* and then remove the item from the baskte */}

                {/* we are using the item it, to go the store and find it and delete it using the action which type is */}
                {/* REMOVE_FROM_BASKET  */}

                <button onClick={removeFromBasket}>Remove from basket</button>

            </div>


        </div>
    )
}

export default CheckoutProduct;