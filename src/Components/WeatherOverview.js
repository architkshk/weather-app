import React, { Component } from 'react';
import TodayCard from './TodayCard';
import OtherCard from './OtherCard';

class WeatherOverview extends Component {

  render() {
    return (
      <div className="WeatherOverview">
        <TodayCard />
        <OtherCard color = '#2B80B5' />
        <OtherCard color = '#2874A4' />
        <OtherCard color = '#225E84' />
        <OtherCard color = '#1F5473' />
      </div> 
    );
  }
}

export default WeatherOverview;
