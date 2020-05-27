import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './Button';

const DailyWeather = ({ States }) => {
  return (
    <div className="dailyWeatherComponent">
      <h2>Daily Weather</h2>
      <div className="grid-container">
        <div className="item1">
          <p>{States['IL'].cities[0].forecast[0].Date}</p>
          <p className="large">
            {States['IL'].cities[0].forecast[0].temprature}
            {'°F'}
          </p>
          <p>
            Feels like:{' '}
            <span className="bald">
              {States['IL'].cities[0].forecast[0].feels}
              {'°F'}
            </span>
          </p>
        </div>
        <div className="item2">
          <p>{States['IL'].cities[0].forecast[1].Date}</p>
          <p className="large">
            {States['IL'].cities[0].forecast[1].temprature}
            {'°F'}
          </p>
          <p>
            Feels like:{' '}
            <span className="bald">
              {States['IL'].cities[0].forecast[1].feels}
              {'°F'}
            </span>
          </p>
        </div>
        <div className="item3">
          <p>{States['IL'].cities[0].forecast[2].Date}</p>
          <p className="large">
            {States['IL'].cities[0].forecast[2].temprature}
            {'°F'}
          </p>
          <p>
            Feels like:{' '}
            <span className="bald">
              {States['IL'].cities[0].forecast[2].feels}
              {'°F'}
            </span>
          </p>
        </div>
        <div className="item4">
          <p>{States['IL'].cities[0].forecast[3].Date}</p>
          <p className="large">
            {States['IL'].cities[0].forecast[3].temprature}
            {'°F'}
          </p>
          <p>
            Feels like:{' '}
            <span className="bald">
              {States['IL'].cities[0].forecast[3].feels}
              {'°F'}
            </span>
          </p>
        </div>
        <div className="item5">
          <p>{States['IL'].cities[0].forecast[4].Date}</p>
          <p className="large">
            {States['IL'].cities[0].forecast[4].temprature}
            {'°F'}
          </p>
          <p>
            Feels like:{' '}
            <span className="bald">
              {States['IL'].cities[0].forecast[4].feels}
              {'°F'}
            </span>
          </p>
        </div>
      </div>
      <div>
        <Link to="/today">
          <Button type="submit" value="Today's Weather" />
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const newState = { ...state };

  return newState;
};

export default connect(mapStateToProps)(DailyWeather);
