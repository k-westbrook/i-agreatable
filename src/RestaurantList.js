import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodTypeFilter from './FoodFilter';
import LocationFilter from './LocationFilter';
import RestaurantContainer from './RestaurantContainer';
import axios from 'axios';

class RestaurantList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
  }
  async getRest() {
    let result = await axios.get(
      "https://hclla7yjk3.execute-api.us-west-1.amazonaws.com/Production"
    )
    this.setState({ restaurants: result.data.body });
  }
  componentDidMount() {
    this.getRest();


  }
  render() {
    console.log(this.state.restaurants)
    return (
      <div >

        <p>RestaurantList</p>
        <div className="filter-bar">

          <div className="filter-item">
            <p>Filter</p>
          </div>
          <div className="filter-item">
            <FoodTypeFilter />
          </div>
          <div className="filter-item">
            <LocationFilter />
          </div>
        </div>
        <div>
          <RestaurantContainer restaurants={this.state.restaurants} />
        </div>

      </div>
    );
  }
}

export default RestaurantList;
