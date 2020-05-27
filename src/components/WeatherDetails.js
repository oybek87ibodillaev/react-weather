import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './Button';

// const mapObject = (myObject) => {
//   for (var key in myObject) {
//     console.log(key);
//   }
// };

const WeatherDetails = ({ States }) => {
  return (
    <div className="todayWeatherComponent">
      <h2>Today's Weather</h2>
      <div className="grid-container">
        <div className="item1">
          <h3>{States.IL.cities[0].name}</h3>
          <p>{States.IL.currentdate}</p>
          <p>{States.IL.time}</p>
        </div>
        <div className="item2">
          <p className="large">
            {States['IL'].cities[0].forecast[0].temprature}
            {'°F'}
          </p>
          <p className="data">
            Feels like:{' '}
            <span>
              {States['IL'].cities[0].forecast[0].feels}
              {'°F'}
            </span>
          </p>
        </div>
      </div>
      <div>
        <Link to="/fiveDays">
          <Button type="submit" value="5 Day Weather" />
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const newState = { ...state };

  return newState;
};

export default connect(mapStateToProps)(WeatherDetails);

// show the current Date, City Name, Current time &
// temperature details
