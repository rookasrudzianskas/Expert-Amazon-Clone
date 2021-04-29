import React from "react";
import "./styles/Product.css";

const Product = ({ id, title, image, price, rating }) => {
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
            <button>Add to basket</button>
        </div>
    );
}

export default Product;