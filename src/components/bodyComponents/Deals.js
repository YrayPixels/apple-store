import React from "react";
const Deals = () => {
    return (
        <>
            <div className="bg-newcol2 dealImgF" id="deals">
                <div className="container-fluid deals my-5 ">
                    <div className="row align-items-center justify-content-evenly">
                        <div className="dealImg d-none d-md-block col-5 text-center">
                            <img className="img-fluid" src="images/mqll.png" alt="" />
                        </div>
                        <div className="col-12 col-md-5 p-3">
                            <h4 className="display-1 text-center text-dark fw-bold">Deal of the Week</h4>
                            <hr />
                            <div className="display-4 text-center text-primary my-5">
                                <div id="timer" data-hours="24" data-minutes="2" data-seconds="3"></div>
                            </div>
                            <div className="text-center">
                                <a className="btn btn-primary btn-lg  text-info rounded-0" href="">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Deals;