import React from "react";

const Hero2 = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-extrabold">Comming Soon</h1>
          <p className="pt-6">
            Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
          <div className="py-6">
          <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
          <button className="btn btn-primary ml-2">Notify Me</button>
          </div><p>Notify me when app is launched :)</p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
