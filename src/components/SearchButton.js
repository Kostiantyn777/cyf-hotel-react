import React from "react";
const SearchButton = ({ buttonText, onClick }) => {
  return (
    <div>
      <button onClick={onClick} className="btn btn-primary">
        {buttonText}
      </button>
    </div>
  );
};

export default SearchButton;
