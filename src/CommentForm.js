import React from 'react';
import './App.css';
import axios from 'axios';

class CommentForm extends React.Component {



  render() {

    return (
      <div>
        <h4 className="leave-a-comment-text">Leave a Comment</h4>
        <form onSubmit={this.props.handleSubmit}>
          <div className='name-comment-container'>
            <div className='text-name'>
              <p>Name</p>
            </div>
            <div >
              <input required="required" type="text" name="userName" className="input-name-comment" />
            </div>
          </div>
          <div className='name-comment-container'>
            <div className='text-name'>
              <p>Comment</p>
            </div>
            <div >
              <textarea required="required" name="comment" className="input-comment"></textarea>
            </div>
          </div>
          <button className="submit-button">Submit your comment!</button>
        </form>

      </div>
    );
  }
}

export default CommentForm;
