import React, { Component } from 'react';
import './App.css';
import WeatherOverview from './WeatherOverview';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      wind: undefined,
    };
  };
  static defaultProps = {
    city: 'Paris',
  };
  
  getWeatherInfo = (city) =>{
    this.setState({city : city});
    var api = 'http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=8e706bd96298ac2e9a3f7b8633c1e5ff';
  };

  render() {
    return (
      <div className="App">
        <WeatherOverview />
      </div>
    );
  }
}

export default App;
