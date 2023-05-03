import React from "react";

import carousel1 from "../../../assets/images/carousel-1.jpg";
import carousel2 from "../../../assets/images/carousel-2.jpg";
import carousel3 from "../../../assets/images/carousel-3.jpg";

const Testimonials  = () => {
  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            This is an awesome <Mark>Freelancing</Mark> platform I&apos;ve used. I
            would use this for anything.
            </p>

            <Avatar
              image={carousel1}
              name="Dagmawi Eyob"
              title="CEO of Colabs"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
            This is an awesome <Mark>Freelancing</Mark> platform I&apos;ve used. I
            would use this for anything.
            </p>

            <Avatar
              image={carousel2}
              name="Dagmawi Nebiat"
              title="CTO of Colabs"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              This is an awesome <Mark>Freelancing</Mark> platform I&apos;ve used. I
              would use this for anything.
            </p>

            <Avatar
              image={carousel3}
              name="Daniel Demelash"
              title="CFO of Colabs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <img
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;