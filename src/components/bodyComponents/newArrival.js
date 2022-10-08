import React from "react";
const NewArrival = () => {
    return (
        <div className="container-fluid py-5">
            <div className="text-center">
                <h3 className="display-5 col-5 m-auto"> New Arrivals  <hr /> <br /></h3>
                <div className="row justify-content-center">
                    <div className="col-5   col-md-2 newArrivals pt-3 border border-black">
                        <p>ALL</p>
                    </div>
                    <div className="col-5 col-md-2 newArrivals pt-3 border border-black">
                        <p>WOMEN</p>
                    </div>
                    <div className="col-5 col-md-2 newArrivals pt-3 border border-black">
                        <p>ACCESSORIES</p>
                    </div>
                    <div className="col-5 col-md-2 newArrivals pt-3 border border-black">
                        <p>MEN</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default NewArrival;