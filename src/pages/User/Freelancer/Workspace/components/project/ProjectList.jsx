import { MdEdit, MdPreview } from "react-icons/md";
import vscodeicon from "../../../../../../assets/images/vscodeicon.png";
import { Link } from "react-router-dom";

const ProjectList = () => {
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
              Project Budjet
            </th>
            <th scope="col" className="px-2 py-3">
              Project Status
            </th>

            <th scope="col" className="px-2 py-3">
              PAYMENT STATUS
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
              <td className="py-2 px-2">COLABS</td>
              <td className="py-2 px-2">11/12/13</td>
              <td className="py-2 px-2">5000 ETB</td>
              <td className="py-2 px-2">ongoing/completed</td>
              <td className="py-2 px-2">
                <button className="bg-purple-600 text-md text-white rounded-md px-2 py-1">
                  Request Payment{/* Requested/Pending, paid */}
                </button>
              </td>

              <td className="py-2 px-2">
                <Link
                  to="/workspace/project-id"
                  className="w-[40px] flex items-center rounded-md py-1 px-3 bg-purple-500  hover:bg-purple-600 text-white"
                >
                  <MdPreview size={20} color="white" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
