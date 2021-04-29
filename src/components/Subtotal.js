import React from "react";
import "./styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../StateProvider";
import {getBasketTotal} from "../reducer";


// this is subtotal component, meaning the left part of the checkout page.
const Subtotal = () => {

    // defining the basket, to access it from this component
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
        {/*    the button with price    */}
        {/*    renders all the things to cound the subtotal */}
            <CurrencyFormat
                 // takes the value of the basket
                renderText={(value) => (
                    <>
                        <p>
                            {/*returns the subtotal value, and some other things*/}
                            {/* react-currency-format handles all the currency things */}
                            Subtotal ({basket.length > 1 ? 'items' : 'item'}) :
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" name="" id=""/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2} value={getBasketTotal(basket)} displayType={"text"} thousandSeparator={true} prefix={"$"} />
            {/* the button to go to pay page */}
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;