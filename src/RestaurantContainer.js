import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

class RestaurantContainer extends React.Component {


  render() {

    return (
      <div>
        <div className="restaurant-container">
          {this.props.restaurants.map(restaurant => {

            if ((this.props.foodType === "Select One" || this.props.foodType === restaurant.food_type) && (this.props.location === "Select One" || this.props.location === restaurant.location_name)) {
              return (
                <Link className="link" to={`/review/${restaurant.location_name}/${restaurant.food_type}/${restaurant.id}`} key={parseInt(restaurant.id)} >
                  <div >
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
                </Link>
              )
            }
          })
          }
        </div>
      </div >
    );
  }
}

export default RestaurantContainer;
