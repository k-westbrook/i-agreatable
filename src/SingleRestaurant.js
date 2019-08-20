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
            <h3>{this.state.restaurantName}</h3>
            <p>Location: {this.state.location}, {this.state.neighborhood}</p>
            <p>Rating: {this.state.rating}</p>
            <img src={this.state.photoURL} alt="restaurant_pic" />
            <p>{this.state.reivew}</p>
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
