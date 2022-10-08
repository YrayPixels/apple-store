import React from "react";
const Newsletter = () => {
    return (
        // newsletter
        <div className="container-fluid bg-newcol2 p-5">
            <div className="row align-items-center">
                <div className="col">
                    <h4 className="display-5">Newsletter</h4>
                    <p>Subscribe to our newsletter and get 20%
                        off your first purchase
                    </p>
                </div>

                <div className="col">
                    <form action="">
                        <input className="form-control mb-3 p-3 border border-0" placeholder="Your email" type="text" />
                        <button className="btn btn-primary text-info" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;