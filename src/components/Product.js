import React from "react";
import "./styles/Product.css";
import {useStateValue} from "../StateProvider";

function Product({ id, title, image, price, rating }) {
// we are getting the access to the data layer, and all the actions, to make the addtobasket work
    // means, then we excecute add to basket by clicking the button, the dispatch will be fired and shoot the action to the reducer which
    // is going to make some logic with it -add or remove from the basket
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        // Add item to the basket ..
        // we use the dispatch gun to fire the object, and shoot the action to the reducer to make some logic
        // in here i am shooting the action, which type is ADD_TO_BASKET, which is going to be the case in the reducer
        // and in the reducer funtion it is going to add it to the basket, in this way, changing the value in the basket to plus the item added
        dispatch({
            type: 'ADD_TO_BASKET',
            // after that we shoot some data, which is payload, and in this case it is all the info about the purchased item
            item: {
                // if you have the key and data the same, you can just remove the data, and leave just id from id: id,
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    };


    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product__rating">
                    {/*stars rating, means ,you create an array, of how many stars are in the product, you fill it with empty values, and map*/}
                    {/* map per each item, it is not important what values, but just run the rating times, and put the start each time*/}

                    {
                        Array(rating).fill().map((_) => (
                            <p>⭐</p>
                        ))
                    }
                {/*    end of stars */}
                </div>
            </div>
            {/* the description image */}
            <img src={image} alt=""/>

            {/* you click on the button, and the addToBasket is going to push the item to the array, to the data layer object, that item added*/}
            {/* in this state, the data layer is going to be updated */}
            {/* is going to push into the data basket array, but it does not push to array, it dispatches an action */}
            {/* meaning it shoots the action with some information and we listen for that action in the reducer function in reducer.js*/}
            {/* and we update it*/}

            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product;