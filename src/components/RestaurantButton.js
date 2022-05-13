import React from "react";

const RestaurantButton = props => {
  return (
    <div>
      <button className="btn btn-danger" onClick={props.orderOne}>
        Add
      </button>
    </div>
  );
};
export default RestaurantButton;
