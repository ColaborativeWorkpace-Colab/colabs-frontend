import { FaUsers } from "react-icons/fa";
import { SiMoneygram, SiOpenproject } from "react-icons/si";

const DashboardContent = () => {
  return (
    <div className="w-full rounded-md px-6 flex flex-col gap-2">
      <div className="flex gap-2 justify-between">
        <div className="bg-purple-50 shadow-md rounded-md p-4">
          <div className="cursor-pointer flex flex-col gap-6">
            <div className="flex gap-x-2 items-center">
              <SiMoneygram className="text-purple-700" size={35} />
              <h1 className="text-2xl font-medium">Total Spent</h1>
            </div>
            <h1 className="text-xl font-medium">10,000 ETB</h1>
          </div>
        </div>
        <div className="bg-purple-50 shadow-md rounded-md p-4">
          <div className="cursor-pointer flex flex-col gap-6">
            <div className="flex gap-x-2 items-center">
              <FaUsers className="text-purple-700" size={35} />
              <h1 className="text-2xl font-medium">Total Hire</h1>
            </div>
            <h1 className="text-xl font-medium">
              122 <span className="text-md font-medium">Freelancers</span>{" "}
            </h1>
          </div>
        </div>
        <div className="bg-purple-50 shadow-md rounded-md p-4">
          <div className="cursor-pointer flex flex-col gap-6">
            <div className="flex gap-x-2 items-center">
              <SiOpenproject className="text-purple-700" size={35} />
              <h1 className="text-2xl font-medium">Total Job Post </h1>
            </div>
            <h1 className="text-xl font-medium">
              111 <span className="text-md font-medium">Jobs</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
