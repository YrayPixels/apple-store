import React from "react";
import Cart from "../cartComponent/Cart";
import BillingAddress from "./Billingaddress";
import CardDetails from "./CardDetails";
const Checkout = () => {
    return (
        <>
            <div className="container-fluid">
                <h4>Checkout</h4>
                <div className="row justify-content-around">
                    <div className="col-5">
                        <div>
                            <h5>Billing Address</h5>
                            <BillingAddress />
                        </div>
                        <div>
                            <h5>Card Details</h5>
                            <CardDetails />
                        </div>

                    </div>
                    <div className="col-4">
                        <Cart />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;