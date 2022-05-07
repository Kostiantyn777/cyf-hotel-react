import React from "react";
const Footer = props => {
  return (
    <footer>
      <div class="text-center py-3">
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
