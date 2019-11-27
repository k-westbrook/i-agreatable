import React from 'react';
import './App.css';


class HomePage extends React.Component {


  render() {

    return (
      <div className="home-page">
        <div>
          <h3 className="homepage-title">i-agreatable</h3>
          <p className="homepage-paragraph">Food Opinions...<b>do you agree?</b></p>
        </div>
        <div className='homepage-photo'>
        </div>
        <div className="homepage-instructions">
          <h4 className="homepage-section-headers">Welcome</h4>
          <p className="homepage-paragraph"> i-agreatable is my site in which I give food opinions of restaurants and bars. Go ahead and click "Restaurant List" in the top right corner. Then, you are able to filter by food type and location. Click on a specific restaurant to see my whole review on it. </p>
          <h4 className="homepage-section-headers">What is the name?</h4>
          <p className="homepage-paragraph">It is the merging of words! <b>I + Agree + Great + Eat</b>  What does this even mean?It means "Do you agree with my great eat suggestions?" If you do, keep on looking out for more reviews coming your way! If you don't, then let me know! I like differing opinions and look forward to a challnege. </p>
        </div>
      </div>
    );
  }
}

export default HomePage;
