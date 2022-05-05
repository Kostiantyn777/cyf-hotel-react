import React from "react";
import HotelLogo from "../images/hotel-logo.jpg";
const Heading = () => {
  return (
    <div>
      <header className="App-header">CYF Hotel</header>
      <img className="App-logo" src={HotelLogo} alt="hotel-logo" />
    </div>
  );
};
export default Heading;
