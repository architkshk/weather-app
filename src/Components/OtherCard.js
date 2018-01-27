import React, { Component } from 'react';


class OtherCard extends Component {

  render() {
      var {color} = this.props;
    return (
      <div className="OtherCard" style= {{background : color}}>
        <div className="Date-OC">Today</div>
        <div className="Weather-OC"><i className="wi wi-day-sunny"></i> </div>
        <div className="Temp-OC">11 C</div>
      </div>
    );
  }
}

export default OtherCard;
