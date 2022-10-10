import Favourite from "./Favourite";
import ItemDescription from "./ItemDescription";
import Quantity from "./Quantity";
import Ratings from "./Rating";

import React, { Component } from 'react'

class ItemView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: true
        }

    }
    addToCart() {
        this.setState({
            message: true
        })
    };

    groupPayment() {
        this.setState({
            message: false
        })
    }

    render() {
        // Conditional Statement to Select Payment Method
        let activePaymentMethod
        if (this.state.message) {
            activePaymentMethod = <div>
                <a className="btn btn-primary rounded-0 text-white py-2" href="/cart"> Add to Cart</a>
            </div>
        } else {
            activePaymentMethod = <div>
                <a className="btn btn-newcol3 rounded-0 text-white py-2" href="/cart"> Group Payment</a>
            </div>
        }
        return (
            <>
                <div className="container-fluid my-5">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 text-center">
                            <img src="images/niki.png" alt="" />
                        </div>
                        <div className="col-12 col-lg-5">
                            <h3 className="display-4">Sleek Shoes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Magnam repellendus beatae distinctio provident facere. Debitis?</p>
                            <div>
                                <div className="bg-newcol2 p-2 text-dark d-flex justify-content-center align-items-center">
                                    <p className="fw-bold px-3 my-2">FREE DELIVERY</p>
                                    <span className="fs-2"><i className="fa-solid fa-truck-fast"></i></span>
                                </div>
                                <div className="my-4">
                                    {/* Payment Selector */}
                                    <div>
                                        <div className="text-center">
                                            <h4>Choose the Best Price </h4>
                                            <hr />
                                        </div>
                                        <div className="row fs-4 py-3 justify-content-center align-items-center text-center">
                                            <div onClick={this.addToCart.bind(this)} className='col-6'>
                                                <input type="radio" className="btn-check" name="price-Option" id="normal-outlined" autocomplete="off" checked />
                                                <label className="btn btn-outline-success rounded-0 border-0" for="normal-outlined">$495.00</label>
                                            </div>
                                            <div onClick={this.groupPayment.bind(this)} className='col-6'>
                                                <input type="radio" className="btn-check" name="price-Option" id="group-outlined" autocomplete="off" />
                                                <label className="btn btn-outline-success rounded-0 border-0" for="group-outlined">$148.00
                                                    <span type='btn' className="badge fw-light bg-secondary" >70% 0ff
                                                    </span></label>
                                            </div>

                                        </div>

                                        {/* How it works Modal  */}
                                        {/* <div class="modal fade" id="#howItWorks" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div id='#howItWorks' className="modal-dialog modal-dialog-centered">
                    </div>
                </div> */}
                                    </div >

                                    <div className="">
                                        <Ratings value='4' name='read-only' />
                                    </div>
                                    <div className="py-3"><p className="fs-4">Select Color</p>
                                        <div className="d-flex">
                                            <span className="text-primary"><i class="fa-solid fa-circle"></i></span>
                                            <span className="px-2"><i class="fa-regular fa-circle"></i></span>
                                            <span className="text-success"><i class="fa-solid fa-circle"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-around align-items-center">
                                    <div>
                                        <div>
                                            <Quantity quantity='3' />
                                        </div>
                                        <div></div>
                                    </div>

                                    <div>
                                        {activePaymentMethod}
                                    </div>

                                    <div className="fs-3">
                                        <Favourite />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Item  Description: Component to description imported here */}
                <div>
                    <ItemDescription />
                </div>
            </>
        )
    }
}


export default ItemView;