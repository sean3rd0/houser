import React from "react";

export default class House extends React.Component {
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        // console.log(this.props.thisHouse)
        const {name, address, city, state, zip} = this.props.thisHouse
        return(
            <>
                <ul>
                    <li>Property Name: {name}</li>
                    <li>Address: {address}</li>
                    <li>City: {city}</li>
                    <li>State: {state}</li>
                    <li>Zip: {zip}</li>
                </ul>
                <button>X</button>
            </>
        )
    }
}