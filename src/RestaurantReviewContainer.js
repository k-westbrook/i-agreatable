import React from 'react';
import CommentForm from './CommentForm';
import CommentSection from './CommentSection';

export default function RestaurantReviewContainer(props) {
  return (
    <div>
      <div className="restaurant-review-container">
        <h4 className="review-title-single-page">Review</h4>
        {(props.review !== null) ?
          <p className="review-text">
            {props.review}
          </p>
          :
          <p className="review-text">
            No review yet!
              </p>
        }
        <CommentForm handleSubmit={props.handleSubmit} />
        <CommentSection comments={props.comments} />
      </div>


    </div>
  )
}