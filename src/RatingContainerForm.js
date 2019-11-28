import React from 'react';
import './App.css';
import Rating from '@material-ui/lab/Rating'

function RatingContainerForm(props) {

  return (

    <div>
      <h4 className='leave-a-comment-text'>Rate It</h4>
      <Rating onChange={props.handleRating} name='rating' size='large' value={props.personalRating} />
    </div>
  )
}

export default RatingContainerForm;
