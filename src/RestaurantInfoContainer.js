import React from 'react';


export default function RestaurantInfoContainer(props) {
  let userRatingAverage;
  let { photoURL } = props;
  if (!photoURL) {
    photoURL = "https://cdn.pixabay.com/photo/2017/07/28/23/18/coming-soon-2550190_1280.jpg";
  }

  if (props.restaurant.userRatingAverage) {
    userRatingAverage = props.restaurant.userRatingAverage;
  } else {
    userRatingAverage = "No Ratings Yet"
  }
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
            <b>Rating by Me: </b>{props.restaurant.rating}
            <br />
            <b>Average User Rating: </b>{userRatingAverage}
          </p>
        </div>
      </div>
    </div>
  )
}
