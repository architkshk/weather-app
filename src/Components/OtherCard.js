import React, { Component } from 'react';
import icon from '../assets/icon.jpg';


class OtherCard extends Component {

  render() {
      var {color} = this.props;
    return (
      <div className="OtherCard" style= {{background : color}}>
        <div className="Date-OC">Today</div>
        <img className="Weather-OC" src={icon} alt=""/>
        <div className="Temp-OC">11 C</div>
      </div>
    );
  }
}

export default OtherCard;
