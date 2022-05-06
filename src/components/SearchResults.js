import React from "react";
import moment from "moment";

const SearchResults = props => {
  //var a = moment([2018,1,13]);
  //var b = moment([2017,12,25]);
  //console.log(a.diff(b,"days"));

  /*let abc = "2015-04-10".split("-").map(function(item) {
    return parseInt(item, 10);
  });
  console.log(abc);*/
  console.log();
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
          {props.results.map((item, index) => {
            return (
              <React.Fragment>
                <tr key={index}>
                  {Object.values(item).map((val, index) => (
                    <td key={index}>{val}</td>
                  ))}
                </tr>
              </React.Fragment>
            );
          })}
          {props.results.map((item, index) => {
            // get CheckOutDate strings from FakeBookings object and convert each of them to array of numbers
            let checkOutDate = item.checkOutDate.split("-").map(function(item) {
              return parseInt(item, 10);
            });
            // get checkInDate strings from FakeBookings object and convert each of them to array of numbers
            let checkInDate = item.checkInDate.split("-").map(function(item) {
              return parseInt(item, 10);
            });
            console.log("check out dates " + checkOutDate[0]);
            // console.log("check in dates " + checkInDate);
            // console.log();
            var a = moment(checkOutDate);
            var b = moment(checkInDate);
            //console.log(a.diff(b,"days"));
            return (
              <tr key={index}>
                <td>{a.diff(b, "days")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default SearchResults;
