import React from "react";
import Quantity from "../ItemDetailsComp/Quantity";
const Cart = () => {
    return (
        <>
            < div className="container shadow my-5" >
                <h5 className="text-center display-5 py-4">My Cart</h5>
                <div>
                    <table className="table table-responsive ">
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>
                                    Items
                                </th>
                                <th>Quantity
                                </th>
                                <th>
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center">
                                    <img className="img-fluid" src="images/niki.png" alt="" />
                                </td>
                                <td className="fs-4">
                                    White Sleek Shoes
                                </td>
                                <td className="text-center">
                                    <div>
                                        <Quantity quantity='5' />
                                    </div>
                                </td>
                                <td>
                                    $200
                                </td>
                            </tr>
                            <tr>
                                <td className="text-center">
                                    <img className="img-fluid" src="images/denim.png" alt="" />
                                </td>
                                <td className="fs-4">
                                    Denim Jacket
                                </td>
                                <td className="text-center">
                                    <div>
                                        <Quantity quantity='2' />
                                    </div>
                                </td>
                                <td>
                                    $200
                                </td>
                            </tr>

                            <tr>
                                <td className="py-4">
                                    <p>Total</p>
                                </td>
                                <td></td>
                                <td className="py-4">
                                    $595
                                </td>
                                <td className="py-4">
                                    <a type="button" className="btn btn-primary text-white" href="/checkout">Proceed to Checkout</a>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>
            </div >
        </>
    );
}

export default Cart;