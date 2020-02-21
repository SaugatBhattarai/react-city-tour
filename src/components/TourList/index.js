import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData
  };
  removeTour = id => {
    console.log(id);

    const { tours } = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedTours
    });
  };

  render() {
    // console.log(this.state.tours);
    const { tours } = this.state;
    console.log(tours);
    return (
      <section className="tourlist">
        {/* <h4>From tour List</h4>
        <Tour /> */}

        {tours.map(tour => {
          return (
            <Tour key={tour.id} tour={tour} removeTours={this.removeTour} />
          );
        })}
      </section>
    );
  }
}
