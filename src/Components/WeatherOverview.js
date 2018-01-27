import React, { Component } from 'react';
import TodayCard from './TodayCard';
import OtherCard from './OtherCard';

class WeatherOverview extends Component {

  render() {
    console.log(this.props.data);
    return (
      <div className="WeatherOverview">
        <TodayCard data={this.props.data}/>
        <OtherCard color = '#2B80B5' data={this.props.data.forecast[0]} />
        <OtherCard color = '#2874A4' data={this.props.data.forecast[1]} />
        <OtherCard color = '#225E84' data={this.props.data.forecast[2]} />
        <OtherCard color = '#1F5473' data={this.props.data.forecast[3]} />
      </div> 
    );
  }
}

export default WeatherOverview;
