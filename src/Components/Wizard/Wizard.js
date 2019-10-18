import React from "react";
import {Link} from "react-router-dom";
// import {Redirect} from "react-router-dom";
import axios from "axios";

export default class Wizard extends React.Component {
    constructor(){
        super()

        this.state = {
            name: "", 
            address: "", 
            city: "", 
            state: "", 
            zip: ""
        }
        this.handleNameInputChange = this.handleNameInputChange.bind(this)
        this.handleAddressInputChange = this.handleAddressInputChange.bind(this)
        this.handleCityInputChange = this.handleCityInputChange.bind(this)
        this.handleStateInputChange = this.handleStateInputChange.bind(this)
        this.handleZipInputChange = this.handleZipInputChange.bind(this)
    }

    handleNameInputChange(value) {
        this.setState({
            name: value
        })
    }

    handleAddressInputChange(value) {
        this.setState({
            address: value
        })
    }

    handleCityInputChange(value) {
        this.setState({
            city: value
        })
    }

    handleStateInputChange(value) {
        this.setState({
            state: value
        })
    }

    handleZipInputChange(value) {
        this.setState({
            zip: value
        })
    }

    submitHouseToDatabase = () => {
        const {name, address, city, state, zip} = this.state;
        const body = {
            name: this.state.name,
            address: this.state.address, 
            city: this.state.city, 
            state: this.state.state, 
            zip: this.state.zip
        };
        axios.post('/api/house', {name, address, city, state, zip})
        .then(this.props.history.push('/'))
        .catch(err => {
            console.log(err)
        })
    }
    
    render(){
        console.log(this.state)
        // console.log(this.props.history)
        return(
            <div>
                Wizard
                <Link to="/">
                    <button 
                        className="wizard-cancel-button"
                    >
                        Cancel
                    </button>
                </Link>
                <div>
                    <input placeholder="Name" onChange={e => this.handleNameInputChange(e.target.value)}></input>
                </div>
                <div>
                    <input placeholder="Address" onChange={e => this.handleAddressInputChange(e.target.value)}></input>
                </div>
                <div>
                    <input placeholder="City" onChange={e => this.handleCityInputChange(e.target.value)}></input>
                    <input placeholder="State" onChange={e => this.handleStateInputChange(e.target.value)}></input>
                    <input placeholder="zip" onChange={e => this.handleZipInputChange(e.target.value)}></input>
                </div>
                {/* <Link to="/"> */}
                    <button 
                        className="wizard-complete-button"
                        onClick={() => {this.submitHouseToDatabase()}}
                    >
                        Complete
                    </button>
                {/* </Link> */}
            </div>
        )
    }
}