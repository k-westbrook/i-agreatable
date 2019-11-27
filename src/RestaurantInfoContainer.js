import React from 'react';


export default function RestaurantInfoContainer(props) {
  return (
    <div className='restaurant-info-container '>
      <h3 className="restaurant-name-title-single-page">{props.restaurant.restaurantName}</h3>
      <div className="restaurant-single-page-side-by-side">
        <div className="image-container-single-page">
          <img className="restaurant-photo-single-page" src={props.restaurant.photoURL} alt=" restaurant_pic" />
        </div>
        <div className="restaurant-info-single-page">
          <p>
            <b>Location:</b> {props.restaurant.location}
            <br />
            <b> Neighborhood: </b>{props.restaurant.neighborhood}
            <br />
            <b> Food Type:</b> {props.restaurant.foodType}
            <br />
            <b>Rating: </b>{props.restaurant.rating}
          </p>
        </div>
      </div>
    </div>
  )
}
