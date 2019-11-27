import React from 'react';
import './App.css';
import FoodTypeFilter from './FoodFilter';
import LocationFilter from './LocationFilter';


export default function FilterContainer(props) {
  return (
    <div>
      <div className="filter-bar">

        <div className="filter-item">
          <p>Filter</p>
        </div>
        <div className="filter-item">
          <FoodTypeFilter handleFoodFilterChange={this.handleFoodFilterChange} />
        </div>
        <div className="filter-item">
          <LocationFilter handleLocationFilterChange={this.handleLocationFilterChange} />
        </div>
      </div>

    </div>
  )
}
