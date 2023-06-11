import React from "react";
import ClientHeader from "../../header/ClientHeader";
import { AiOutlineFolderView } from "react-icons/ai";
import profileImg from "../../../../../assets/images/profile.jpg";
import { Link } from "react-router-dom";
const ApplicationDetail = () => {
  return (
    <div>
      <ClientHeader />
      <div className="mt-[100px] md:px-[80px] px-[10px]">
        <div className="shadow-sm flex flex-col gap-4 bg-gray-50 p-4">
          <div className="w-full bg-gray-200 p-2 rounded-md flex justify-between items-center">
            <div className="user-name flex gap-2">
              <img
                src={profileImg}
                alt=""
                className="rounded-full w-[50px] h-[50px]"
              />
              <div className="flex ml-2 flex-col">
                <p className="text-lg text-slate-800">Kalkidan Getahun</p>
                <p className="text-md text-slate-500">Frontend Developer</p>
              </div>
            </div>
            <div className="">
              <Link
                to=""
                className="text-white bg-purple-600 hover:bg-purple-700 rounded-md px-4 py-2"
              >
                View Kalkidan's Profile
              </Link>
            </div>
          </div>
          <div className="proposal content mt-2">
            <p className="text-md text-slate-800">
              Proposal Content Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Necessitatibus nostrum reiciendis rerum odio
              aliquam libero delectus similique ratione assumenda sunt. Quia,
              consequuntur. Dolorum blanditiis accusantium molestias cupiditate
              qui at deleniti! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Provident adipisci vel necessitatibus similique
              vitae earum molestiae impedit, numquam voluptatibus, quae
              perspiciatis consequuntur excepturi itaque aliquam facere quisquam
              harum. At, eum. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Totam repellendus suscipit laborum animi culpa
              alias rem ipsam quia accusantium, aut aspernatur? Facilis impedit
              facere commodi quasi ducimus beatae voluptate sunt!
            </p>
          </div>
          <div className="flex gap-x-5 mt-4">
            <Link
              to=""
              className="text-white bg-purple-600 hover:bg-purple-700 rounded-md px-4 py-2"
            >
              Accept
            </Link>
            <Link
              to=""
              className="text-white bg-red-500 hover:bg-red-600 rounded-md px-4 py-2"
            >
              Reject
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;
