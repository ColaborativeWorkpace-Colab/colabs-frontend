import React from "react";
import { MdDelete, MdEdit, MdPreview } from "react-icons/md";
import { Link } from "react-router-dom";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ProjectDetailSection = ({ project }) => {
  const navigateTo = useNavigate();
  return (
    <div>
      {project.title ? (
        <div className="mt-[100px]">
          <div className="overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-white uppercase dark:text-gray-400 bg-purple-600">
                <tr>
                  <th scope="col" className="px-2 py-3">
                    Project Name
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Project Memeber
                  </th>

                  <th scope="col" className="px-2 py-3">
                    Started Date
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
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700 py">
                  <td className="py-2 px-2">{project?.title}</td>
                  <td className="py-2 px-2">{project.members.length || 0}</td>
                  <td className="py-2 px-2">
                    {moment(
                      new Date(project?.createdAt).toISOString()
                    ).fromNow()}
                  </td>
                  <td className="py-2 px-2">{project.status}</td>
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
                      onClick={() => {
                        navigateTo(
                          `/client/workspace/edit-project/${project?._id}`,
                          {
                            state: { project },
                          }
                        );
                      }}
                    />
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
                    Budget
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
                {project.members.map((member, id) => (
                  <tr
                    key={id}
                    className="border-b border-gray-200 dark:border-gray-700 py"
                  >
                    <td className="py-2 px-2">{member.workerId.email}</td>
                    <td className="py-2 px-2">{member.earnings} BIRR</td>
                    <td className="py-2 px-2">
                      <Link
                        to={""}
                        className="bg-purple-500 hover:bg-purple-700 px-2 py-1 rounded-md text-white"
                      >
                        {member.paymentRequested
                          ? "Payment Request"
                          : "Not Requested"}
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
                        Remove From Project
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>
          //TODO: Add Loading Animation
          <h1 className="text-black">Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailSection;
