import React from 'react';
import './App.css';
import FoodTypeFilter from './FoodFilter';
import LocationFilter from './LocationFilter';


export default function FilterContainer(props) {
  return (
    <div>
      <div className="filter-bar">

        <div className="filter-item">
          <p>Filter Options</p>
        </div>
        <div className="filter-item">
          <FoodTypeFilter foodTypeFilterList={props.foodTypeFilterList} handleFoodFilterChange={props.handleFoodFilterChange} />
        </div>
        <div className="filter-item">
          <LocationFilter locationFilterList={props.locationFilterList} handleLocationFilterChange={props.handleLocationFilterChange} />
        </div>
      </div>

    </div>
  )
}
