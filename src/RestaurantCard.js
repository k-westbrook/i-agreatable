import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

export default function RestaurantCard(props) {
  return (
    <div>
      <Link className="link" to={`/review/${props.restaurant.location_name}/${props.restaurant.food_type}/${props.restaurant.restaurant_id}`} key={parseInt(props.restaurant.restaurant_id)} >
        <div >
          <div className="restaurant-card">
            <h4 className="restaurant-name-title">{props.restaurant.restaurant_name}</h4>
            <img className="restaurant-photo" src={props.restaurant.photo_url} alt=" food" />
            <p className="restaurant-short-info">
              <b>Location: </b>{props.restaurant.location_name}
              <br />
              <b> Neighborhood: </b>
              {props.restaurant.neighborhood_name}
              <br />
              <b>
                Food Type:
                        </b> {props.restaurant.food_type}
              <br />
              <b>Rating:</b> {props.restaurant.rating}
            </p>

          </div>
        </div>
      </Link>
    </div>
  )
}
