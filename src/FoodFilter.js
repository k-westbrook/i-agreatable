import React from 'react';
import './App.css';

function FoodTypeFilter(props) {
    return (
        <div className='filter-container' >
            <div className="filter-text">
                <p>Food Type</p>
            </div>
            <div className='select-box-div'>
                <select onChange={props.handleFoodFilterChange} className="filter-select">
                    {props.foodTypeFilterList.map((foodObject, index) => {
                        return (
                            <option value={foodObject.food_type}>{foodObject.food_type}</option>
                        )
                    })}

                </select>
            </div>
        </div >
    );

}

export default FoodTypeFilter;



