import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodTypeFilter from './FoodFilter';
import LocationFilter from './LocationFilter';

class RestaurantContainer extends React.Component {


  render() {

    return (
      <div>
        <p>Restaurant Cards would go here</p>
        <div className="restaurant-container">
          {this.props.restaurants.map(restaurant => {

            if ((this.props.foodType === "Select One" || this.props.foodType === restaurant.food_type) && (this.props.location === "Select One" || this.props.location === restaurant.location_name)) {
              return (
                <div key={parseInt(restaurant.id)}>
                  <div className="restaurant-card">
                    <p>
                      {restaurant.restaurant_name}
                    </p>
                    <img className="restaurant-photo" src={restaurant.photo_url} alt=" food" />
                    <p>{restaurant.location_name},
        {restaurant.neighborhood_name}, {restaurant.rating},{restaurant.food_type}
                    </p>

                  </div>
                </div>
              )
            }
          })
          }
        </div>
      </div>
    );
  }
}

export default RestaurantContainer;
