import React from "react";
import { MdDelete, MdEdit, MdPreview } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectDetailSection = () => {
  return (
    <div className="mt-[100px]">
      <div className="overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase dark:text-gray-400 bg-purple-600">
            <tr>
              <th scope="col" className="px-2 py-3">
                Project Name
              </th>
              <th scope="col" className="px-2 py-3">
                Project Length
              </th>
              <th scope="col" className="px-2 py-3">
                Project Lead
              </th>
              <th scope="col" className="px-2 py-3">
                Started Date
              </th>
              <th scope="col" className="px-2 py-3">
                END DATE
              </th>
              <th scope="col" className="px-2 py-3">
                PROJECT STATUS
              </th>
              <th scope="col" className="px-2 py-3">
                Delete
              </th>
              <th scope="col" className="px-2 py-3">
                Edit
              </th>
              <th scope="col" className="px-2 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700 py">
              <td className="py-2 px-2">COLABS</td>
              <td className="py-2 px-2">6 months</td>
              <td className="py-2 px-2">Getahun@gmail.com</td>
              <td className="py-2 px-2">12/11/89</td>
              <td className="py-2 px-2">22//11/99</td>
              <td className="py-2 px-2">ongoing</td>
              <td className="py-2 px-2">
                {" "}
                <MdDelete
                  size={20}
                  color="purple"
                  className="cursor-pointer"
                  onClick={""}
                />
              </td>
              <td className="py-2 px-2">
                {" "}
                <MdEdit
                  size={20}
                  color="purple"
                  className="cursor-pointer"
                  onClick={""}
                />
              </td>
              <td className="py-2 px-2">
                <Link
                  to={""}
                  className="bg-purple-500 hover:bg-purple-700 px-2 py-1 rounded-md text-white"
                >
                  Mark as completed
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-10 overflow-x-auto sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase dark:text-gray-400 bg-purple-600">
            <tr>
              <th scope="col" className="px-2 py-3">
                Team Member
              </th>
              <th scope="col" className="px-2 py-3">
                Payment Request Status
              </th>

              <th scope="col" className="px-2 py-3">
                Pay Freelancer
              </th>
              <th scope="col" className="px-2 py-3">
                Remove Freelancer
              </th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((member, id) => (
              <tr
                key={id}
                className="border-b border-gray-200 dark:border-gray-700 py"
              >
                <td className="py-2 px-2">Kalkidan@gmail.com</td>
                <td className="py-2 px-2">
                  <Link
                    to={""}
                    className="bg-purple-500 hover:bg-purple-700 px-2 py-1 rounded-md text-white"
                  >
                    Not Requested
                  </Link>
                </td>
                <td className="py-2 px-2">
                  <Link
                    to={""}
                    className="bg-purple-500 hover:bg-purple-700 px-2 py-1 rounded-md text-white"
                  >
                    Release Payment
                  </Link>
                </td>
                <td className="py-2 px-2">
                  <Link
                    to={""}
                    className="bg-red-500 hover:bg-red-700 px-2 py-1 rounded-md text-white"
                  >
                    Remove
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectDetailSection;
