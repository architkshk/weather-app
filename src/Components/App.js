import React, { Component } from 'react';
import './App.css';
import WeatherOverview from './WeatherOverview';
import 'weather-icons/css/weather-icons.min.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      city: 'New Delhi',
      current : {
                  temperature: undefined,
                  humidity: undefined,
                  weather: undefined
                },
      forecast : []  
    };
    this.getWeatherInfo = this.getWeatherInfo.bind(this);
    this.checkstate = this.checkstate.bind(this);
  };
  
  getWeatherInfo = () => {
    var self = this;
    fetch('http://api.openweathermap.org/data/2.5/forecast/daily?q=New%20Delhi&APPID=58b6f7c78582bffab3936dac99c31b25&units=metric&cnt=6').then(
      results => {
        return results.json();
      }).then(data  => {
        console.log(data);
        self.setState({current : {
            temperature: data.list[0].temp.day,
            humidity: data.list[0].humidity,
            weather: data.list[0].weather[0].main
        }});
        var forecast = []; 
        for(var i=1;i<5;i++) {
          forecast.push({
            temperature: data.list[i].temp.day,
            humidity: data.list[i].humidity,
            weather: data.list[i].weather[0].main,
            date: new Date(data.list[i].dt * 1000).toString().split(' ')[0]
          });
        }
        self.setState({forecast : forecast});
      }).then(()=>{
      console.log(this.state);
    });
  };

  componentDidMount(){
    this.getWeatherInfo()
  }

  checkstate(){
    if(this.state.forecast.length!==0){
      return <WeatherOverview data={this.state}/>;
    }
  }

  render() {
    return (
      <div className="App">
        {this.checkstate()}
      </div>
    );
  }
}

export default App;
