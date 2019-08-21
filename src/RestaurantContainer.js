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
                      <h4 className="restaurant-name-title">{restaurant.restaurant_name}</h4>
                      <img className="restaurant-photo" src={restaurant.photo_url} alt=" food" />
                      <p className="restaurant-short-info">
                        <b>Location: </b>{restaurant.location_name}
                        <br />
                        <b> Neighborhood: </b>
                        {restaurant.neighborhood_name}
                        <br />
                        <b>
                          Food Type:
                        </b> {restaurant.food_type}
                        <br />
                        <b>Rating:</b> {restaurant.rating}
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
