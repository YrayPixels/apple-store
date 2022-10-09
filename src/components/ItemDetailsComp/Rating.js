import React, { Component } from 'react'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'


export class Ratings extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div><Typography component="legend"></Typography>
                <Rating name={this.props.name} value={this.props.value} readOnly />
            </div>
        )
    }
}
export default Ratings;