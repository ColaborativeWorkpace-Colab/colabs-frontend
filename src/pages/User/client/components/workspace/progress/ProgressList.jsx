import { MdEdit, MdPreview } from "react-icons/md";
import { Link } from "react-router-dom";

const ProgressList = ({ projects }) => {
  return (
    <div className="md:relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase dark:text-gray-400 bg-purple-600">
          <tr>
            <th scope="col" className="px-2 py-3">
              Project Name
            </th>

            <th scope="col" className="px-2 py-3">
              Started Date
            </th>

            <th scope="col" className="px-2 py-3">
              Progress
            </th>
            <th scope="col" className="px-2 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 4, 5, 3, 4].map((user, id) => (
            <tr
              key={id}
              className="border-b border-gray-200 dark:border-gray-700 py"
            >
              <td className="py-2 px-2">COLABS</td>
              <td className="py-2 px-2">12/11/89</td>
              <td className="py-2 px-2">ongoing</td>

              <td className="py-2 px-2">
                <button className="bg-purple-500 hover:bg-purple-700 px-2 py-1 rounded-md text-white">
                  Mark as completed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgressList;
