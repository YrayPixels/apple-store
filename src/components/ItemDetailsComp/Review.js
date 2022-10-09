import React from 'react'
import Ratings from './Rating';
import Avatar from '@mui/material/Avatar'


const Review = () => {
    return (
        <>
            {/* Reviews */}
            <div className='container'>
                <h5 className='display-6'>Reviews</h5>
                <div className='row justify-content-center'>
                    <div className='col-4 text-start' >
                        <div className='row align-items-center'>
                            <div className='col-2' >
                                <Avatar src="images/male.jpg" alt="" />
                            </div>
                            <div className='col-7'>
                                <p>27 Aug 2016</p>
                                <h5>Brandon William</h5>
                                <p>Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Tenetur, repellendus!</p>
                                <Ratings value='5' name='controlled' />

                            </div>
                        </div>
                        <div className='row align-items-center'>
                            <div className='col-2' >
                                <Avatar src="images/male.jpg" alt="" />
                            </div>
                            <div className='col-7'>
                                <p>27 Aug 2016</p>
                                <h5>Brandon William</h5>
                                <p>Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Tenetur, repellendus!</p>
                                <Ratings value='3' name='controlled' />

                            </div>
                        </div>
                        <div className='row align-items-center'>
                            <div className='col-2' >
                                <Avatar src="images/male.jpg" alt="" />
                            </div>
                            <div className='col-7'>
                                <p>27 Aug 2016</p>
                                <h5>Brandon William</h5>
                                <p>Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Tenetur, repellendus!</p>
                                <Ratings value='4' name='controlled' />

                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <h5 className='display-6'>Add a Review</h5>
                        <form action="">
                            <div className='mb-3'>
                                <input placeholder="Name*" className="form-control rounded-0" type="text" />
                            </div>
                            <div className='mb-3'>
                                <input placeholder="Email*" className="form-control rounded-0" type="text" />
                            </div >

                            <div className='mb-4'>
                                <span className='pb-5'>Your Rating:
                                    <span>
                                        <Ratings value='4' name='controlled' />

                                    </span>
                                </span>
                                <textarea placeholder="" className="form-control rounded-0" type="textarea" />
                            </div>

                            <a className='btn text-white  btn-primary' type="submit">
                                Submit
                            </a>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Review;




