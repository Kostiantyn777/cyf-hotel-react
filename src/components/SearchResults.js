import React, { useState } from "react";
import moment from "moment";
import SearchButton from "./SearchButton";
import CustomerProfile from "./CustomerProfile";

const calculateNights = (checkInDate, checkOutDate) => {
  var a = moment(checkOutDate);
  var b = moment(checkInDate);

  return <td className="text-center">{a.diff(b, "days")}</td>;
};

const SearchResults = props => {
  const [rowIndexClicked, setRowIndexClicked] = useState(null);
  const [clientId, setClientId] = useState("");

  function handleId(someId) {
    setClientId(someId);
  }

  const handlerRowClicked = rowIndex => {
    if (rowIndexClicked !== rowIndex) {
      setRowIndexClicked(rowIndex);
    } else {
      setRowIndexClicked(null);
    }
  };

  return (
    <div className="table-responsive">
      <table className="table table-bordered ">
        <thead className="thead-dark">
          <tr className="text-center">
            {Object.keys(props.results[0]).map((elem, index) => (
              <th className="text-center" scope="col" key={index}>
                {elem}
              </th>
            ))}
            <th scope="col">Number of Nights</th>
            <th scope="col">Buttons</th>
          </tr>
        </thead>
        <tbody>
          {/* Map trough array of objects  */}
          {props.results.map((item, index) => {
            //console.log(item);
            return (
              <React.Fragment key={index}>
                <tr
                  id={index}
                  className={rowIndexClicked === index ? "highlighted" : ""}
                  onClick={() => handlerRowClicked(index)}
                >
                  {/* Map through values of each property in array of objects  */}
                  {Object.values(item).map((val, index) => (
                    <td className="text-center" key={index}>
                      {val}
                    </td>
                  ))}

                  {calculateNights(item.checkInDate, item.checkOutDate)}
                  <td>
                    <SearchButton
                      onClick={() => handleId(item.id)}
                      buttonText="Show profile"
                    />
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <CustomerProfile id={clientId} />
    </div>
  );
};
export default SearchResults;
