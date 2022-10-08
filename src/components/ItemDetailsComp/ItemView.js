import React from "react";
import Favourite from "./Favourite";
import Quantity from "./Quantity";
import Ratings from "./Rating";
const ItemView = () => {
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
                                <div className="d-flex fs-5 justify-content-evenly">
                                    <div>
                                        <p className="text-primary fw-bold">$495.00</p>

                                    </div>
                                    <div>
                                        <p className="text-success fw-bold">$148.00</p>
                                        {/* <span className="fs-6">get 70% off with our new Team Purchase</span> */}
                                    </div>
                                </div>
                                <div className="">
                                    <Ratings />
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
                                        <Quantity />
                                    </div>
                                    <div></div>
                                </div>
                                <div>
                                    <a className="btn btn-primary rounded-0 text-white py-2" href="/cart"> Add to Cart</a>
                                </div>
                                <div>
                                    <a className="btn btn-newcol3 rounded-0 text-white py-2" href="/cart"> Group Payment</a>
                                </div>

                                <div className="fs-3">
                                    <Favourite />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Item description */}
            <div className="container-fluid">
                <div>
                    <div>Description</div>
                    <div>Additional Information</div>
                    <div>Reviews</div>
                </div>
                {/* Description */}
                <div className="Description ">
                    <div>
                        <p>Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Deserunt aliquam quos enim iusto
                            , minus laudantium. Laudantium placeat eaque sint.
                            Praesentium tempora non in dolorem voluptate illum
                            suscipit perferendis incidunt quo!</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
                {/* Additional Information */}
                <div>
                    <h5>Aditional Information</h5>
                    <p>Color: Blue, Orange, White</p>
                    <p>Size: 34, 40, 43, 45,</p>
                </div>
                {/* Reviews */}
                <div>
                    <h5>Reviews</h5>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <div>
                                Ratings will be here
                            </div>
                        </div>
                    </div>
                    <div>
                        <h5>Add a Review</h5>
                        <form action="">
                            <div>
                                <input placeholder="Name*" className="form-control" type="text" />
                            </div>
                            <div>
                                <input placeholder="Email*" className="form-control" type="text" />
                            </div>

                            <div>
                                <p>Your Rating: <span>Ratings will be here</span></p>
                                <textarea placeholder="" className="form-control" type="textarea" />
                            </div>

                            <button type="submit">
                                Submit
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemView;