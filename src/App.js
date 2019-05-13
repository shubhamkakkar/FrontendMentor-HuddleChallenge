import React, { Component, Fragment } from "react";

import LandingSection from "./container/LandingSection";
import ServiceGrid from "./container/ServiceGrid";
import Footer from "./container/Footer";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <LandingSection />
        <ServiceGrid />
        <Footer />
      </Fragment>
    );
  }
}
