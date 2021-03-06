import React from 'react';
import './App.css';
import axios from 'axios';
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
      personalRating: 1,
      userRatingTotal: null,
      userRatingNumber: null,
      userRatingAverage: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleRatingSubmit = this.handleRatingSubmit.bind(this);
  }

  async getSingleRestaurantRequest(id) {
    const response = await axios.get(`https://0uz9m4vuz3.execute-api.us-west-1.amazonaws.com/Production/${id}`);

    if (response.data.length === 0) {
      this.props.history.goBack();
    }
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

  async getSingleRestaurantsRatings(id) {
    const response = await axios.get(`https://c98in2pn44.execute-api.us-west-1.amazonaws.com/PROD/${id}`);

    if (response.data.userRatingNumber > 0) {
      this.setState({
        userRatingTotal: response.data.userRatingTotal,
        userRatingNumber: response.data.userRatingNumber,
        userRatingAverage: Math.round(10 * response.data.userRatingAverage) / 10
      })
    } else {
      this.setState({
        userRatingTotal: response.data.userRatingTotal,
        userRatingNumber: response.data.userRatingNumber,
        userRatingAverage: response.data.userRatingAverage
      })
    }
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
    evt.target.userName.value = '';
    evt.target.comment.value = '';
    const results = await axios.post(`https://wg49ryzop8.execute-api.us-west-1.amazonaws.com/Production/`, { restaurant_id: restaurantId, name, comment })

    const newComment = {
      restaurant_id: restaurantId, comment_id: results.data.body[0].comment_id, name, comment
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

  async handleRatingSubmit() {

    const results = await axios.post(`https://c98in2pn44.execute-api.us-west-1.amazonaws.com/PROD`, { restaurant_id: this.state.restaurantId, rating: this.state.personalRating })

    let newUserRatingNumber = this.state.userRatingNumber + 1;
    let newUserRatingTotal = this.state.userRatingTotal + this.state.personalRating;

    let newUserRatingAverage = Math.round((newUserRatingTotal / newUserRatingNumber) * 10) / 10;


    this.setState({
      userRatingTotal: newUserRatingTotal,
      userRatingNumber: newUserRatingNumber,
      userRatingAverage: newUserRatingAverage
    })

  }

  componentDidMount() {
    const restaurantId = this.props.match.params.id;
    this.setState({
      restaurantId
    })
    this.getSingleRestaurantRequest(restaurantId);
    this.getSingleRestaurantComments(restaurantId);
    this.getSingleRestaurantsRatings(restaurantId);
  }
  render() {

    return (

      <div className="single-page">
        {this.state.restaurantId ?
          <div>
            <RestaurantInfoContainer restaurant={this.state} />
            <RestaurantReviewContainer handleRating={this.handleRating} comments={this.state.comments} review={this.state.review} handleSubmit={this.handleSubmit} personalRating={this.state.personalRating} handleRatingSubmit={this.handleRatingSubmit} />
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
