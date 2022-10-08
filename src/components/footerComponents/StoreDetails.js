import React from "react";

const StoreDetails = () => {
    return (
        <div>
            {/* Store Details */}
            <div className=" container-fluid Shipping py-5">
                <div className="row g-2 text-dark align-items-stretch justify-content-evenly">
                    <div className="col-12 col-md-2 bg-newcol1 d-flex align-items-center justify-content-center">
                        <span className="display-5 text-primary"><i className="fa-solid fa-truck-fast"></i></span>
                        <h5 className="p-3">FREE SHIPPING</h5>
                    </div>

                    <div className="col-12 col-md-2 bg-newcol1 d-flex align-items-center justify-content-center">
                        <span className=" display-5 text-primary"><i className="fa-solid fa-rotate-left"></i></span>
                        <h5 className="p-3">45 DAYS RETURN </h5>
                    </div>
                    <div className=" col-12 col-md-2 bg-newcol1 d-flex align-items-center justify-content-center">
                        <span className="display-5 text-primary"><i className="fa-solid fa-money-bill"></i></span>
                        <h5 className="p-3">PAYMENT ON DELIVERY</h5>
                    </div>
                    <div className="col-12 col-md-2 bg-newcol1 d-flex align-items-center justify-content-center">
                        <span className="display-5 text-primary"><i className="fa-solid fa-clock"></i></span>
                        <h5 className="p-3">OPEN ALL WEEK</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StoreDetails;