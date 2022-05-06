import React from "react";

const SearchResults = props => {
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            {Object.keys(props.results[0]).map((elem, index) => (
              <th scope="col" key={index}>
                {elem}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.results.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((val, index) => (
                <td key={index}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SearchResults;
