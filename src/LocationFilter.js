import React from 'react';
import './App.css';

function LocationFilter(props) {

    return (
        <div className="filter-container" >
            <div className="filter-text">
                <p>Location</p>
            </div>
            <div className='select-box-div'>
                <select onChange={props.handleLocationFilterChange} className="filter-select">
                    {props.locationFilterList.map((locationObject, index) => {
                        return (
                            <option key={index} value={locationObject.location_name}>{locationObject.location_name}</option>
                        )
                    })}

                </select>
            </div>
        </div>
    );

}

export default LocationFilter;
