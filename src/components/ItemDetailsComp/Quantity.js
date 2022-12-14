import React, { Component } from 'react'

export class Quantity extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: parseInt(this.props.quantity)
        }
    }
    increment() {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }
    decrement() {
        if (this.state.quantity <= 1) {
            this.setState({
                quantity: 1
            })
        } else {
            this.setState({
                quantity: this.state.quantity - 1
            })
        }

    }
    render() {
        return (
            <div className='d-flex justify-content-evenly align-items-center'>
                <div>
                    <button onClick={() => this.decrement()} className='btn btn-newcol4 text-white'>-</button>
                </div>
                <div className='col-6 text-center'>
                    <h5 className='fs-3'>{this.state.quantity}</h5>
                </div>
                <div>
                    <button onClick={() => this.increment()} className='btn btn-newcol4 text-white'>+</button>
                </div>
            </div>
        )
    }
}

export default Quantity