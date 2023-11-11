import React from "react";
import { Link } from "react-router-dom";
import gif from '../../assets/e-commerce.gif'

const Home = () => {
  return (
    <div className="flex items-center my-container ">
      <div className="my-container flex flex-col items-center pb-24 text-center lg:pb-56 text-gray-900">
        <h1 className="text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text">
          Welcome To E-Shop
        </h1>
        <p className="my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900">
          Best E-commerce platform for buying high quality Smart Home Appliances
          at extremely affordable Price.
        </p>
        <div className="flex flex-wrap justify-center">
          <Link to="/shop">
            <button type="button" className="btn-primary">
              Shop Now
            </button>
          </Link>
          <Link to="/about">
            <button type="button" className="btn-outlined">
              Learn more
            </button>
          </Link>
        </div>
      </div>
      <div className="">
        <img src={gif} alt="" />
      </div>
    </div>
  );
};

export default Home;
