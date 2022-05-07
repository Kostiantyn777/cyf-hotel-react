import React from "react";
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

  return <td>{a.diff(b, "days")}</td>;
};

const SearchResults = props => {
  return (
    <div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            {Object.keys(props.results[0]).map((elem, index) => (
              <th scope="col" key={index}>
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
                <tr>
                  {/* Map trough values of each property in array of objects  */}
                  {Object.values(item).map((val, index) => (
                    <td key={index}>{val}</td>
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
