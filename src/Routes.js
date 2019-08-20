import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage';
import RestaurantList from './RestaurantList';
import SingleRestaurant from './SingleRestaurant';



/**
 * COMPONENT
 */
class Routes extends Component {


  render() {

    return (

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/thelist" component={RestaurantList} />
        <Route exact path="/review/:location/:foodType/:id" component={SingleRestaurant} />
      </Switch>

    )
  }
}


export default Routes
