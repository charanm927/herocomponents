import React from "react";

const Hero1 = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://source.unsplash.com/random)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://source.unsplash.com/random?ux"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="text-base-100">
          <h1 className="text-5xl font-bold">Welcome to ContentQl</h1>
          <p className="py-6">
            Ea sit kasd erat stet at no aliquyam ipsum justo justo. Vero no
            dolor justo takimata ea sed magna dolore, rebum invidunt sit lorem
            tempor, dolor amet takimata consetetur accusam ea, accusam et clita
            sed.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
