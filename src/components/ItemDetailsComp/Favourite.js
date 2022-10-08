import React, { Component } from 'react'

export class Favourite extends Component {
    constructor(props) {
        super(props)

        this.state = {
            click: true
        }
    }
    Fav() {
        this.setState({
            click: false
        })
    }
    notFav() {
        this.setState({
            click: true
        })
    }
    render() {
        if (this.state.click) {
            return (<div>
                <div onClick={() => this.Fav()}>
                    <span className=""><i class="fa-regular fa-heart"></i></span>
                </div>
            </div >
            )
        } else {
            return (
                <div>
                    <div onClick={() => this.notFav()}>
                        <span className="text-primary"><i class="fa-solid fa-heart"></i></span>
                    </div>
                </div>

            )
        }
    }
}

export default Favourite