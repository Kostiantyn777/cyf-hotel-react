import React from "react";
const Footer = props => {
  return (
    <footer>
      <div>
        <ul>
          {props.arrayOfInfo.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
