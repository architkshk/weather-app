import React, { Component } from 'react';

class TodayCard extends Component {

  render() {
    var city = this.props.data.city;
    var temp = this.props.data.current.temperature;
    return (
      <div className="TodayCard">
        <div className="City-TC"><p>{city}</p></div>
        <div className="Date-TC">Today</div>
        <div className="Weather-TC"><i className="wi wi-day-sunny"></i> </div>
        <div className="Temp-TC">{temp} C</div>
      </div> 
    );
  }
}

export default TodayCard;
