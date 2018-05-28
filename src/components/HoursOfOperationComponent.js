import React, { Component } from "react";
import "./ComponentCSS/HoursOfOperation.css";
import {getHours} from "../helpers/Contentful";


const dayTemplate = [
    { Sunday: ""},
    { Monday: ""},
    { Tuesday: ""},
    { Wednesday: ""},
    { Thursday: ""},
    { Friday: ""},
    { Saturday: ""},
]
class HoursOfOperationComponent extends Component {
    constructor(props) {
    super(props);
    this.state = {
        today: "",
        hoursOfOperation: {
            closeHours: dayTemplate,
            openHours: dayTemplate,
        }
    }
  }

  async componentWillMount() {
      const hours = await getHours();
      await this.setState({
          hoursOfOperation: hours,
          today: new Date().getDay()
      })
      document.getElementById(`day${this.state.today}`).classList.add("today");
  }
  componentDidMount() {
  }
    getOperatingTimes(day) {
        return {
            Day: Object.keys(this.state.hoursOfOperation.openHours[day])[0],
            Open: Object.values(this.state.hoursOfOperation.openHours[day])[0],
            Close: Object.values(this.state.hoursOfOperation.closeHours[day])[0]
        }
    }

  render() {
    return (
        <div className={`col-${this.props.resizeValue}-${this.props.colWidth}`}>
          <div className="business-hours">
            <h2 className="title">Opening Hours</h2>
            <ul className="list-unstyled opening-hours">
                {Array.from({length:7}).map((day, index) => {
                    const dayInfo = this.getOperatingTimes(index)
                    return <li key={index} id={"day"+index}> {dayInfo.Day}<span className="float-right">
                        {dayInfo.Open !== "" ? `${dayInfo.Open} - ${dayInfo.Close}` : "Closed"}</span>
                            </li>
                })}
            </ul>
          </div>
        </div>
    );
  }
}

export default HoursOfOperationComponent;
