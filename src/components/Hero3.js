import React from "react";

const Hero3 = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://wallpaperaccess.com/full/268543.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Right Place To</h1>
          <h1 className="mb-5 text-4xl font-bold">
            Get a Better and Professionals Design
          </h1>
          <button className="btn btn-info text-base-100 mr-2">Hire Us!</button>
          <button className="btn btn-outline btn-accent">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
