import React from 'react';
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
                },
                {
                    value: "Portland",
                    text: "Portland"
                }

            ]
        }

    }
    render() {
        return (
            <div className="filter-container">
                <div className="filter-text">
                    <p>Location</p>
                </div>
                <div className='select-box-div'>
                    <select onChange={this.props.handleLocationFilterChange} className="filter-select">
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
