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
      foodTypeFilterList: [],
      locationFilterList: [],
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


    this.setState({
      restaurants: result.data.body.restaurantList,
      foodTypeFilterList: result.data.body.foodTypeFilterList,
      locationFilterList: result.data.body.locationFilterList
    });

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
      <div className='restaurant-list'>
        <h3 className="header-restaurant">Restaurant List</h3>
        <FilterContainer handleFoodFilterChange={this.handleFoodFilterChange} handleLocationFilterChange={this.handleLocationFilterChange} locationFilterList={this.state.locationFilterList} foodTypeFilterList={this.state.foodTypeFilterList} />
        <div>
          <RestaurantCardContainer restaurants={this.state.restaurants} foodType={this.state.filterFoodType} location={this.state.filterLocation} />
        </div>
      </div>
    );
  }
}

export default RestaurantList;
