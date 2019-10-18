import React from "react";
import House from "../House/House"

export default class Dashboard extends React.Component {
    constructor(){
        super()

        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div>Dashboard</div>
                <House />
            </div>
        )
    }
}