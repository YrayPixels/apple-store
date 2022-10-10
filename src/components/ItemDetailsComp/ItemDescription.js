import React, { Component } from 'react'
import Additionalinfo from './Additionalinfo'
import Description from './Description'
import Review from './Review'

export default class ItemDescription extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectDiv: 'Description'
        }
    }
    description() {
        this.setState({
            selectDiv: 'Description'
        })
    }
    additionalInfo() {
        this.setState({
            selectDiv: 'additionalInfo'
        })
    }
    reviews() {
        this.setState({
            selectDiv: 'Review'

        })
    }
    render() {


        if (this.state.selectDiv == 'additionalInfo') {
            return (
                <>
                    <div className="container-fluid description">
                        <div className='d-flex justify-content-around'>
                            <div>
                                <button onClick={() => this.description()}>Description</button>
                            </div>
                            <div>
                                <button className='border-bottom border-4 border-primary' onClick={() => this.additionalInfo()}>Additional Information</button>
                            </div>
                            <div><button onClick={() => this.reviews()}>
                                Reviews
                            </button>
                            </div>
                        </div>

                        <div className='py-5'>
                            <Additionalinfo />
                        </div>
                    </div>
                </>
            )
        } else if (this.state.selectDiv == 'Description') {
            return (
                <>
                    <div className="container-fluid description">
                        <div className='d-flex justify-content-around'>
                            <div>
                                <button className='border-bottom border-4 border-primary' onClick={() => this.description()}>Description</button>
                            </div>
                            <div>
                                <button onClick={() => this.additionalInfo()}>Additional Information</button>
                            </div>
                            <div><button onClick={() => this.reviews()}>
                                Reviews
                            </button>
                            </div>
                        </div>
                        <div className='py-5'>
                            <Description />
                        </div>
                    </div>
                </>
            )
        } else if (this.state.selectDiv == 'Review') {
            return (
                <>
                    <div className="container-fluid description">
                        <div className='d-flex justify-content-around'>
                            <div>
                                <button onClick={() => this.description()}>Description</button>
                            </div>
                            <div>
                                <button onClick={() => this.additionalInfo()}>Additional Information</button>
                            </div>
                            <div><button className='border-bottom border-4 border-primary' onClick={() => this.reviews()}>
                                Reviews
                            </button>
                            </div>
                        </div>
                        <div className='py-5 '>
                            <Review />
                        </div>
                    </div>
                </>
            )
        }
    }
}
