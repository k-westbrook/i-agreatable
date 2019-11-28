import React from 'react';
import './App.css';
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentSection from './CommentSection';
import RestaurantInfoContainer from './RestaurantInfoContainer';
import RestaurantReviewContainer from './RestaurantReviewContainer';


class SingleRestaurant extends React.Component {

  constructor() {
    super();
    this.state = {
      restaurantId: null,
      restaurantName: '',
      foodType: '',
      location: '',
      neighborhood: '',
      photoURL: '',
      rating: null,
      review: '',
      comments: [],
      personalRating: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRating = this.handleRating.bind(this);
  }

  async getSingleRestaurantRequest(id) {
    const response = await axios.get(`https://0uz9m4vuz3.execute-api.us-west-1.amazonaws.com/Production/${id}`);
    const data = response.data[0];

    this.setState({
      restaurantName: data.restaurant_name,
      foodType: data.food_type,
      location: data.location_name,
      neighborhood: data.neighborhood_name,
      photoURL: data.photo_url,
      rating: data.rating,
      review: data.review
    })
  }

  async getSingleRestaurantComments(id) {

    const response = await axios.get(`https://wg49ryzop8.execute-api.us-west-1.amazonaws.com/Production/${id}`);

    this.setState({
      comments: response.data
    });
  }

  async handleSubmit(evt) {

    evt.preventDefault();
    const restaurantId = this.state.restaurantId;
    const name = evt.target.userName.value;
    const comment = evt.target.comment.value;
    const results = await axios.post(`https://wg49ryzop8.execute-api.us-west-1.amazonaws.com/Production/`, { restaurant_id: restaurantId, name, comment })
    evt.persist();
    console.log(results)
    const newComment = {
      restaurantId, id: results.data.body[0].comment_id, name, comment
    }

    const newCommentArray = [...this.state.comments, newComment];

    this.setState({
      comments: newCommentArray
    })
  }

  handleRating(evt) {

    let personalRating = parseInt(evt.target.value);
    this.setState({ personalRating: personalRating })
  }

  handleRatingSubmit() {

  }

  componentDidMount() {
    const restaurantId = this.props.match.params.id;
    this.setState({
      restaurantId
    })
    this.getSingleRestaurantRequest(restaurantId);
    this.getSingleRestaurantComments(restaurantId);
  }
  render() {

    return (

      <div className="single-page">
        {this.state.restaurantId ?
          <div>
            <RestaurantInfoContainer restaurant={this.state} />
            <RestaurantReviewContainer handleRating={this.handleRating} comments={this.state.comments} review={this.state.review} handleSubmit={this.handleSubmit} personalRating={this.state.personalRating} />
          </div>
          :
          <div>
            <p>Loading Review</p>
          </div>
        }
      </div>
    );
  }
}

export default SingleRestaurant;
