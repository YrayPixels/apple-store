import React, { Component } from 'react'
import Description from './Description'

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

    }
    reviews() {

    }
    render() {

        if (this.state.selectDiv == 0) {
            return (
                <>
                </>
            )
        } else if (this.state.selectDiv == 'Description') {
            return (
                <>
                    <div className="container-fluid">
                        <div className='d-flex justify-content-around'>
                            <div>
                                <button onClick={() => this.description()}>Description</button>
                            </div>
                            <div>
                                <button>Additonal Information</button>
                            </div>
                            <div><button>
                                Reviews
                            </button>
                            </div>
                        </div>
                        <div>
                            <Description />
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <> THis is for Reviews
                </>
            )

        }
    }
}
