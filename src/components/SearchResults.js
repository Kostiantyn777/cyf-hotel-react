import React, { useState } from "react";
import moment from "moment";

const calculateNights = (checkInDate, checkOutDate) => {
  // get CheckOutDate strings from FakeBookings object and convert each of them to array of numbers
  let checkOutDateMoment = checkOutDate.split("-").map(function(item) {
    return parseInt(item, 10);
  });
  // get checkInDate strings from FakeBookings object and convert each of them to array of numbers
  let checkInDateMoment = checkInDate.split("-").map(function(item) {
    return parseInt(item, 10);
  });

  var a = moment(checkOutDateMoment);
  var b = moment(checkInDateMoment);

  return <td className="text-center">{a.diff(b, "days")}</td>;
};

const SearchResults = props => {
  const [rowIndexClicked, setRowIndexClicked] = useState(null);

  const handlerRowClicked = rowIndex => event => {
    if (rowIndexClicked !== rowIndex) {
      setRowIndexClicked(rowIndex);
    } else {
      setRowIndexClicked(null);
    }
  };

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            {Object.keys(props.results[0]).map((elem, index) => (
              <th className="text-center" scope="col" key={index}>
                {elem}
              </th>
            ))}
            <th scope="col">Number of Nights</th>
          </tr>
        </thead>
        <tbody>
          {/* Map trough array of objects  */}
          {props.results.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <tr
                  id={index}
                  className={rowIndexClicked === index ? "highlighted" : ""}
                  onClick={handlerRowClicked(index)}
                >
                  {/* Map trough values of each property in array of objects  */}
                  {Object.values(item).map((val, index) => (
                    <td className="text-center" key={index}>
                      {val}
                    </td>
                  ))}

                  {calculateNights(item.checkInDate, item.checkOutDate)}
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default SearchResults;
