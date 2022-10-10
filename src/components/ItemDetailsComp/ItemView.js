import Favourite from "./Favourite";
import ItemDescription from "./ItemDescription";
import Quantity from "./Quantity";
import Ratings from "./Rating";

import React, { Component } from 'react'

class ItemView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addTocart: true,
            groupPaymentLink: true
        }

    }
    addToCart() {
        this.setState({
            addTocart: true
        })
    };

    groupPayment() {
        this.setState({
            addTocart: false
        })
    }

    linkPayment() {
        this.setState({
            groupPaymentLink: true
        })
    }
    joinGroup() {
        this.setState({
            groupPaymentLink: false
        })
    }

    render() {
        // Conditional Statement to Select Payment Method
        let activePaymentMethod
        if (this.state.addTocart) {
            activePaymentMethod = <div>
                <a className="btn btn-primary rounded-0 text-white py-2" href="/cart"> Add to Cart</a>
            </div>
        } else {
            activePaymentMethod = <div>
                <div className="dropdown">
                    <a className="btn btn-newcol3 rounded-0 text-white py-2  dropdown-toggle" href="#"
                        role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Pay with Group Payment</a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">

                        <li>
                            <a type="button" class="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Generate Your Link
                            </a>
                        </li>
                        <li onClick={this.groupPayment.bind(this)}><a class="dropdown-item" >
                            Join other waiting buyers
                        </a></li>
                    </ul>

                </div>
                {/* <!-- Modal --> */}
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Generated Link</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h4><a href="#">https://applestore/male?shoes_63?ref7283gj9</a></h4>
                                To purchase at this discount kindly Share this link to 10 of your family and friends, through your various social media platforms.
                                Your purchase at the discounted price will be made possible when you have 10 persons who buys that pair.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-newcol1">View your group</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        };
        // sTatement to Chose either link or group
        let groupPaymentType
        if (this.state.groupPaymentLink == true) {
            groupPaymentType = <div>
                Generate Link
            </div>
        } else {
            groupPaymentType = <div>
                Join a Group
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
                                    {/* Price  Selector */}
                                    <div>
                                        <div className="text-center">
                                            <p>The Best Price is available for you with direct payment or group payment </p>
                                            <hr />
                                        </div>
                                        <div className="row fs-4 py-3 justify-content-center align-items-center text-center">
                                            <div className='col-6'>
                                                <input onClick={this.addToCart.bind(this)} type="radio" className="btn-check" name="price-Option" id="normal-outlined" autocomplete="off" checked />
                                                <label className="btn btn-outline-success rounded-0 border-0" for="normal-outlined">$495.00</label>
                                            </div>
                                            <div className='col-6'>
                                                <input type="radio" className="btn-check" name="price-Option" id="group-outlined" autocomplete="off" />
                                                <label onClick={this.groupPayment.bind(this)} className="btn btn-outline-success rounded-0 border-0" for="group-outlined">$148.00
                                                    <span type='btn' className="badge mx-1 fw-light bg-secondary" >70% 0ff
                                                    </span></label>
                                            </div>

                                        </div>


                                    </div >
                                    {/* Ratings Stars */}
                                    <div className="">
                                        <Ratings value='4' name='read-only' />
                                    </div>
                                    {/* Select COlor */}
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
                {/* Generated Link */}
                {/* Groups */}
                <div className="display-3">
                    {groupPaymentType}
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