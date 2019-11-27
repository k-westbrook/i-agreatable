import React from 'react';
import './App.css';
import RestaurantCard from './RestaurantCard';

class RestaurantContainer extends React.Component {


  render() {
    let count = 0;
    return (
      <div>
        <div className="restaurant-container">
          {this.props.restaurants.map(restaurant => {

            if ((this.props.foodType === "Select One" || this.props.foodType === restaurant.food_type) && (this.props.location === "Select One" || this.props.location === restaurant.location_name)) {
              count++;
              return (
                <RestaurantCard restaurant={restaurant} key={parseInt(restaurant.id)} />
              )
            }
          })
          }
          {(count === 0) ?
            <div className="no-restaurant-container">
              <h4>No restaurants in this category yet</h4>
            </div>
            :
            <div>
            </div>
          }
        </div>
      </div >
    );
  }
}

export default RestaurantContainer;
