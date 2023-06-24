import React from "react";

const VerificationList = () => {
  return (
    <div className="md:relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase dark:text-gray-400 bg-purple-600">
          <tr>
            <th scope="col" className="px-2 py-3">
              First Name
            </th>
            <th scope="col" className="px-2 py-3">
              Last Name
            </th>
            <th scope="col" className="px-2 py-3">
              Email
            </th>
            <th scope="col" className="px-2 py-3">
              Role
            </th>
            <th scope="col" className="px-2 py-3">
              Request Time
            </th>
            <th scope="col" className="px-2 py-3">
              Id Document
            </th>
            <th scope="col" className="px-2 py-3">
              Bussiness License
            </th>
            <th scope="col" className="px-2 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {[1, 4, 5, 3, 4].map((user, id) => (
            <tr
              key={id}
              className="border-b border-gray-200 dark:border-gray-700 py"
            >
              <td className="py-2 px-2">First Name</td>
              <td className="py-2 px-2">Last Name</td>
              <td className="py-2 px-2">Recruiter@gmail.com</td>
              <td className="py-2 px-2">Recruiter</td>
              <td className="py-2 px-2">11/12/13</td>
              <td className="py-2 px-2">Document Name</td>
              <td className="py-2 px-2">License Document</td>

              <td className="py-2 px-2">
                <button className="flex items-center rounded-md py-1 px-3 bg-purple-500  hover:bg-purple-600 text-white">
                  <span>Review</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerificationList;
