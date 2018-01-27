import React, { Component } from 'react';
import icon from '../assets/icon.jpg';

class TodayCard extends Component {

  render() {
    return (
      <div className="TodayCard">
        <div className="City-TC">Paris</div>
        <div className="Date-TC">Today</div>
        <img className="Weather-TC" src={icon} alt=""/>
        <div className="Temp-TC">11 C</div>
      </div> 
    );
  }
}

export default TodayCard;
