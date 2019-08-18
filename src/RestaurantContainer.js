import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodTypeFilter from './FoodFilter';
import LocationFilter from './LocationFilter';

class RestaurantContainer extends React.Component {


  render() {
    return (
      <div >
        <p>Restaurant Cards would go here</p>
        {this.props.restaurants.map(restaurant => {
          return (
            <div key={parseInt(restaurant.id)}>
              <p>
                {restaurant.restaurant_name}, {restaurant.location_name},
        {restaurant.neighborhood_name}, {restaurant.rating}
              </p>
            </div>
          )
        })}

      </div>
    );
  }
}

export default RestaurantContainer;
