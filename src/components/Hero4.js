import React from "react";
import { Search2Icon } from "@chakra-ui/icons";

const Hero4 = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://tailwindcomponents.com/svg/website-designer-bro.svg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl font-semibold">
            A <span className="text-4xl font-bold">Free Repository</span> For
            Community Components Using{" "}
            <span className="text-4xl font-bold">Tailwind Css</span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-lg w-full max-w-xs"
          />
          <button className="btn btn-accent -ml-14">
            <Search2Icon color={"white"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero4;
