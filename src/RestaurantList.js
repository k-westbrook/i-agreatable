import React from 'react';
import './App.css';
import FoodTypeFilter from './FoodFilter';
import LocationFilter from './LocationFilter';
import RestaurantContainer from './RestaurantContainer';
import axios from 'axios';


class RestaurantList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      filterFoodType: 'Select One',
      filterLocation: 'Select One'
    }
    this.handleFoodFilterChange = this.handleFoodFilterChange.bind(this);
    this.handleLocationFilterChange = this.handleLocationFilterChange.bind(this);
    this.getRestaurants = this.getRestaurants.bind(this);
  }
  async getRestaurants() {
    let result = await axios.get(
      "https://0uz9m4vuz3.execute-api.us-west-1.amazonaws.com/Production"
    )

    this.setState({ restaurants: result.data.body });
  }


  handleFoodFilterChange(evt) {
    evt.preventDefault();
    this.setState({
      filterFoodType: evt.target.value
    })
  }

  handleLocationFilterChange(evt) {
    evt.preventDefault();
    this.setState({
      filterLocation: evt.target.value
    })
  }
  componentDidMount() {
    this.getRest();
  }
  render() {

    return (
      <div >

        <p className="header-restaurant">Restaurant List</p>
        <div className="filter-bar">

          <div className="filter-item">
            <p>Filter</p>
          </div>
          <div className="filter-item">
            <FoodTypeFilter handleFoodFilterChange={this.handleFoodFilterChange} />
          </div>
          <div className="filter-item">
            <LocationFilter handleLocationFilterChange={this.handleLocationFilterChange} />
          </div>
        </div>
        <div>
          <RestaurantContainer restaurants={this.state.restaurants} foodType={this.state.filterFoodType} location={this.state.filterLocation} />
        </div>

      </div>
    );
  }
}

export default RestaurantList;
