import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodTypeFilter from './FoodFilter';
import LocationFilter from './LocationFilter';
import RestaurantContainer from './RestaurantContainer';

class RestaurantList extends React.Component {
  render()
  {
  return (
    <div >
        
     <p>RestaurantList</p>
<div className="filter-bar">

<div className="filter-item">
             <p>Filter</p>
         </div>
         <div className="filter-item">
         <FoodTypeFilter/>
         </div>
         <div className="filter-item">
         <LocationFilter/>
         </div>
</div>
<div>
    <RestaurantContainer/>
</div>
    
    </div>
  );
}
}

export default RestaurantList;
