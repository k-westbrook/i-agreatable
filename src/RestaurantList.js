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
      restaurants: [],
      filterFoodType: 'Select One',
      filterLocation: 'Select One'
    }
    this.handleFoodFilterChange = this.handleFoodFilterChange.bind(this);
    this.getRest = this.getRest.bind(this);
  }
  async getRest() {
    let result = await axios.get(
      "https://hclla7yjk3.execute-api.us-west-1.amazonaws.com/Production"
    )
    this.setState({ restaurants: result.data.body });
  }




  handleFoodFilterChange(evt) {
    evt.preventDefault();
    console.log(evt.target.value)
    this.setState({
      filterFoodType: evt.target.value
    })

  }
  componentDidMount() {
    this.getRest();


  }
  render() {

    return (
      <div >

        <p>RestaurantList</p>
        <div className="filter-bar">

          <div className="filter-item">
            <p>Filter</p>
          </div>
          <div className="filter-item">
            <FoodTypeFilter handleFoodFilterChange={this.handleFoodFilterChange} />
          </div>
          <div className="filter-item">
            <LocationFilter />
          </div>
        </div>
        <div>
          <RestaurantContainer restaurants={this.state.restaurants} foodType={this.state.filterFoodType} />
        </div>

      </div>
    );
  }
}

export default RestaurantList;
