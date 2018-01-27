import React, { Component } from 'react';


class OtherCard extends Component {

  render() {
      var {color} = this.props;
      var { temperature, humidity, weather, date} = this.props.data;
    return (
      <div className="OtherCard" style= {{background : color}}>
        <div className="Date-OC">{date}</div>
        <div className="Weather-OC"><i className="wi wi-day-sunny"></i> </div>
        <div className="Temp-OC">{temperature} C</div>
      </div>
    );
  }
}

export default OtherCard;
