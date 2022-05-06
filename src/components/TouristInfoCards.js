import React from "react";
const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://i.pinimg.com/564x/73/ec/58/73ec586522747b9b6cb2cbe8e700fea8.jpg"
          alt="Glasgow"
          className="card-img-top"
        />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title ">Glasgow</h5>
          <p className="card-text text-center">
            Glasgow is the most populous city in Scotland and the fourth-most
            populous city in the United Kingdom, as well as being the 27th
            largest city by population in Europe.
          </p>
          <a
            href="https://peoplemakeglasgow.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://i.pinimg.com/564x/68/7b/26/687b26ca7e5f6b23e93d9e58cc85766b.jpg"
          alt="Manchester"
          className="card-img-top"
        />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title">Manchester</h5>
          <p className="card-text text-center">
            Manchester is a city in North West England with a population of
            547,627 in 2018, lying within the Greater Manchester Built-up Area
            with a population of 2.7 million.
          </p>
          <a
            href="https://www.visitmanchester.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://i.pinimg.com/564x/45/49/da/4549da99a56dcd2d23a3223cb2531606.jpg"
          alt="London"
          className="card-img-top"
        />
        <div className="card-body d-flex flex-column align-items-center">
          <h5 className="card-title">London</h5>
          <p className="card-text text-center">
            As one of the world's global cities, London exerts strong influence
            on its arts, commerce, education, entertainment, fashion, finance,
            health care, media, tourism, and communications, and has sometimes
            been called the capital of the world.
          </p>
          <a
            href="https://visitlondon.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
