import React from 'react';
import './App.css';
import RestaurantCardContainer from './RestaurantCardContainer';
import axios from 'axios';
import FilterContainer from './FilterContainer';

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

    this.getRestaurants();

  }

  render() {

    return (
      <div >
        <p className="header-restaurant">Restaurant List</p>
        <FilterContainer handleFoodFilterChange={this.handleFoodFilterChange} handleLocationFilterChange={this.handleLocationFilterChange} />
        <div>
          <RestaurantCardContainer restaurants={this.state.restaurants} foodType={this.state.filterFoodType} location={this.state.filterLocation} />
        </div>
      </div>
    );
  }
}

export default RestaurantList;
