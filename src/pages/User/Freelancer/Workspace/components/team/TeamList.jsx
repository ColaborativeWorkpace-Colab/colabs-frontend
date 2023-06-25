import { AiFillEdit } from "react-icons/ai";
import { MdEdit, MdPreview } from "react-icons/md";
import TeamNameList from "./TeamNameList";

const TeamList = () => {
  return (
    <div className="md:relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase dark:text-gray-400 bg-purple-600">
          <tr className="">
            <th scope="col" className="px-2 py-3">
              Project Name
            </th>
            <th scope="col" className="px-2 py-3">
              Started Date
            </th>
            <th scope="col" className="px-2 py-3">
              Project Budget
            </th>

            <th scope="col" className="px-2 py-3">
              Project Status
            </th>
            <th scope="col" className="px-2 py-3">
              Project Teams
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 4, 5, 3, 4].map((user, id) => (
            <tr
              key={id}
              className="border-b border-gray-200 dark:border-gray-700 py"
            >
              <td className="border border-gray-300 py-2 px-2">COLABS</td>
              <td className="border border-gray-300 py-2 px-2">11/11/11</td>
              <td className="border border-gray-300 py-2 px-2">4000 ETB</td>
              <td className="border border-gray-300 py-2 px-2">Ongoing</td>

              <td className="border border-gray-300 py-2 px-2">
                <TeamNameList />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamList;
