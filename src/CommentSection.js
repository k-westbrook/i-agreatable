import React from 'react';
import './App.css';

class CommentSection extends React.Component {



  render() {
    return (
      <div className="comment-section">
        <h4 className="leave-a-comment-text">Comments</h4>
        {(this.props.comments.length > 0) ? this.props.comments.map(comment => {
          return (
            <div key={parseInt(comment.id)} className="comments-section">
              <p><b>{comment.name}: </b> {comment.comment}</p>
            </div>
          )
        })
          :
          <p>No comments yet!</p>
        }
      </div>
    );
  }
}

export default CommentSection;
