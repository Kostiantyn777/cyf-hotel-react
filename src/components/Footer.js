import React from "react";
const Footer = props => {
  return (
    <div>
      <ul>
        {props.arrayOfInfo.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
};
export default Footer;
