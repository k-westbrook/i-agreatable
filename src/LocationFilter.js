import React from 'react';
import logo from './logo.svg';
import './App.css';

class LocationFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: [
                {
                    value: "Select One",
                    text: "Select One"
                },
                {
                    value: "Seattle",
                    text: "Seattle"
                },
                {
                    value: "New York City",
                    text: "New York City"
                }

            ]
        }

    }
    render() {
        return (
            <div className="filter-container">
                <div>
                    <p>Location</p>
                </div>
                <div>
                    <select onChange={this.props.handleLocationFilterChange}>
                        {this.state.locations.map((locationObject, index) => {
                            return (
                                <option key={index} value={locationObject.value}>{locationObject.text}</option>
                            )
                        })}

                    </select>
                </div>
            </div>
        );
    }
}

export default LocationFilter;
