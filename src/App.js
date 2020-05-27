import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch,Link } from 'react-router-dom';
import './App.css';
import Button from './components/Button';
import WeatherDetails from './components/WeatherDetails';
import DailyWeather from './components/DailyWeather';

function WeatherApp({ city, States, dispatchSubmit }) {
  const [state, setState] = useState({
    city: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    console.log(state.city);
    setState({
      city: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      city: '',
    });
    dispatchSubmit();

    console.log('app');
  };

  return (
    <div id="app">
      <h1>Weather App</h1>
      <form onChange={handleChange}>
        <div className="my-1">
          <label htmlFor="city">Enter City</label>
        </div>
        <div>
          <input type="text" name="city" id="city" placeholder="ex. New York" />
        </div>
        <div>
          <Button type="submit" func={handleSubmit} value="Submit" />
        </div>
      </form>
      <Switch>
        <Route exact path="/fiveDays" component={DailyWeather} />
        <Route exact path="/today" component={WeatherDetails} />
        <Route component={WeatherDetails} />
        {/* <WeatherDetails /> */}
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  const newState = { ...state };

  return newState;
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSubmit: () => dispatch({ type: 'HANDLESUBMIT', city: 'New York' }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
