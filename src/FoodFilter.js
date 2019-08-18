import React from 'react';
import logo from './logo.svg';
import './App.css';

class FoodTypeFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foodTypes: [
                {
                    value: "all",
                    text: "Select One"
                },
                {
                    value: "classic_american",
                    text: "Classic American"
                },
                {
                    value: "new_american",
                    text: "New American"
                },
                {
                    value: "italian",
                    text: "Italian"
                },
                {
                    value: "mexican",
                    text: "Mexican"
                },
                {
                    value: "thai",
                    text: "Thai"
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
                    <select>
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



