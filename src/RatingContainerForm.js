import React from 'react';
import './App.css';
import Rating from '@material-ui/lab/Rating'

function RatingContainerForm(props) {

  return (

    <div className='rating-container' >
      <h4 className='rating-label'>Rate The Restaurant</h4>
      <Rating onChange={props.handleRating} className='rating' size='large' value={props.personalRating} name='rating' />
      <button className='rating-button' onClick={props.handleRatingSubmit}>Submit Rating!</button>
    </div>
  )
}

export default RatingContainerForm;
