import React from 'react';
import './App.css';
import Rating from '@material-ui/lab/Rating'

function RatingContainerForm(props) {

  return (

    <div className='rating-container' >
      <h4 className='rating-label'>Rate The Restaurant</h4>
      <Rating onChange={props.handleRating} className='rating' size='large' value={props.personalRating} />
      <button className='rating-button' type='submit' onSubmit={props.handleRatingSubmit}>Submit Rating!</button>
    </div>
  )
}

export default RatingContainerForm;
