import React from 'react';
import logo from './logo.svg';
import './App.css';

class FoodTypeFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foodTypes: [
                {
                    value: "Select One",
                    text: "Select One"
                },
                {
                    value: "Classic American",
                    text: "Classic American"
                },
                {
                    value: "New American",
                    text: "New American"
                },
                {
                    value: "Italian",
                    text: "Italian"
                },
                {
                    value: "Mexican",
                    text: "Mexican"
                },
                {
                    value: "Thai",
                    text: "Thai"
                },
                {
                    value: "Mediterranean",
                    text: "Mediterranean"
                },
                {
                    value: "Pizza",
                    text: "Pizza"
                },
                {
                    value: "Cocktail Bar",
                    text: "Cocktail Bar"
                }

            ]
        }

    }

    render() {
        return (
            <div className='filter-container' >
                <div>
                    <p>Food Type</p>
                </div>
                <div>
                    <select onChange={this.props.handleFoodFilterChange}>
                        {this.state.foodTypes.map((foodObject, index) => {
                            return (
                                <option key={index} value={foodObject.value}>{foodObject.text}</option>
                            )
                        })}

                    </select>
                </div>
            </div>
        );
    }
}

export default FoodTypeFilter;



