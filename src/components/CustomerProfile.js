import React from "react";

const CustomerProfile = props => {
  return <div>{props.id ? <>Customer Profile {props.id}</> : ""}</div>;
};

export default CustomerProfile;
