import React from 'react';
import './App.css';
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentSection from './CommentSection';


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
      comments: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async getSingleRestaurantRequest(id) {
    const response = await axios.get(`https://0uz9m4vuz3.execute-api.us-west-1.amazonaws.com/Production/${id}`, { restaurantId: id });

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
    await axios.post(`https://wg49ryzop8.execute-api.us-west-1.amazonaws.com/Production/`, { restaurant_id: restaurantId, name, comment })
    evt.persist();
    const newComment = {
      restaurantId, name, comment
    }

    const newCommentArray = [...this.state.comments, newComment];

    this.setState({
      comments: newCommentArray
    })
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
            <h3 className="restaurant-name-title-single-page">{this.state.restaurantName}</h3>
            <div className="restaurant-single-page-side-by-side">
              <div className="image-container-single-page">
                <img className="restaurant-photo-single-page" src={this.state.photoURL} alt=" restaurant_pic" />
              </div>
              <div className="restaurant-info-single-page">
                <p>
                  <b>Location:</b> {this.state.location}
                  <br />
                  <b> Neighborhood: </b>{this.state.neighborhood}
                  <br />
                  <b> Food Type:</b> {this.state.foodType}
                  <br />
                  <b>Rating: </b>{this.state.rating} </p>
              </div>

            </div>
            <div className="restaurant-review-container">
              <h4 className="review-title-single-page">Review</h4>
              {(this.state.review !== null) ?
                <p className="review-text">
                  {this.state.review}
                </p>
                :
                <p className="review-text">
                  No review yet!
              </p>
              }
              <CommentForm handleSubmit={this.handleSubmit} />
              <CommentSection comments={this.state.comments} />
            </div>

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
