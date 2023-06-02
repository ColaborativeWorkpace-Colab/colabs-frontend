import React from "react";
import { MdMoreVert } from "react-icons/md";

const DraftSection = () => {
  return (
    <div className="shadow-sm p-4 mt-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-medium text-2xl text-slate-800">Your Drafts</h1>
        </div>
        <div>
          <h1 className="text-blue-600 text-sm cursor-pointer">
            See all drafts
          </h1>
        </div>
      </div>
      {Array.from(Array(2)).map(() => (
        <div className="mt-5 flex flex-col hover:bg-gray-100 cursor-pointer py-4 px-2 border-b-2 border-gray-200">
          <div className="flex justify-between items-center">
            <p> UX/UI designer to bring website mockup and prototype to life</p>
            <span className="">
              <MdMoreVert size={25} color="purple" />
            </span>
          </div>
          <p className="text-gray-600">Saved 2 days ago</p>
        </div>
      ))}
    </div>
  );
};

export default DraftSection;
