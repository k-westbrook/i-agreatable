import React from 'react';
import './App.css';
import axios from 'axios';


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
      review: ''
    }
  }

  async getSingleRestaurantRequest(id) {
    const response = await axios.post(" https://0uz9m4vuz3.execute-api.us-west-1.amazonaws.com/Production", { restaurantId: id });
    const data = response.data.body[0];
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

  componentDidMount() {
    const restaurantId = this.props.match.params.id;

    this.getSingleRestaurantRequest(restaurantId);

  }
  render() {

    return (

      <div >
        {!this.state.restaurantId ?
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
              <p className="review-text">
                {this.state.review}
              </p>
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
