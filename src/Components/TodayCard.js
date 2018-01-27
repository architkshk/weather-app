import React, { Component } from 'react';

class TodayCard extends Component {

  render() {
    return (
      <div className="TodayCard">
        <div className="City-TC"><p>Paris</p></div>
        <div className="Date-TC">Today</div>
        <div className="Weather-TC"><i className="wi wi-day-sunny"></i> </div>
        <div className="Temp-TC">11 C</div>
      </div> 
    );
  }
}

export default TodayCard;
