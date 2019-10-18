import React from "react";
import House from "../House/House"
import {Link} from "react-router-dom";
import axios from "axios";

export default class Dashboard extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            listOfHouses: []
        }
    }

    componentDidMount(){
        this.getHousesFromDatabase()
    }

    getHousesFromDatabase(){
        axios.get('/api/houses')
        .then(response => {
            this.setState({
                listOfHouses: response.data//REMEMBER THIS
            })
        })
    } 

    deleteHouse = (id) => {
        axios.delete(`/api/house/${id}`)
    }


    render(){
        let mappedListOfHouses = this.state.listOfHouses.map((individualHouseObject, indexOfHouseObjectInArray) => {
            return (
                <House 
                    key={individualHouseObject.id}
                    thisHouse={individualHouseObject}
                />
            )
        })
        return(
            <div>
                <div>Dashboard</div>
                <Link to="/wizard"><button>Add New Property</button></Link>
                {mappedListOfHouses}
            </div>
        )
    }
}