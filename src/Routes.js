import React, { Component } from 'react'

import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage';
import RestaurantList from './RestaurantList';



/**
 * COMPONENT
 */
class Routes extends Component {


  render() {

    return (

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/thelist" component={RestaurantList} />
      </Switch>

    )
  }
}


export default Routes
