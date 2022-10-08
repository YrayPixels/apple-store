import React from "react";

const Landing = () => {
    return (
        <>
            <div className="row align-items-center justify-content-evenly bg-newcol1 py-5">
                <div className="col-12 col-md-5 text-sm-center text-md-start landing">
                    <h1 className="display-2 p-2 fw-bold">
                        Shop Top Quality Fashion Items
                    </h1>
                    <p>
                        Get up to 70% discount with our new <span className="text-primary bg-newcol2 p-2">GROUP payment</span>
                        method
                    </p>
                    <a className="btn btn-primary  rounded-0 text-info" href="#">How it works</a>
                </div>
                <div className="d-none d-lg-block col-6 shoe">
                    <img className="img-fluid" src="images/niki.png" alt="Shoe" />
                </div>
            </div>
        </>
    );
}

export default Landing;