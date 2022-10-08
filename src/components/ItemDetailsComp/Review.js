import React from 'react'

const Review = () => {
    return (
        <>
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
        </>
    );

    export default Review;
