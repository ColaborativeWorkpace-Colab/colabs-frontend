import React from "react";
import { projectList } from "./data";
import { FiMoreHorizontal } from "react-icons/fi";
import {
	MdOutlineArrowForwardIos,
	MdOutlineArrowBackIosNew,
} from "react-icons/md";
const ProjectListTable = () => {
	const tableHeader = [{ title: "Name" }, { title: "Key" }, { title: "Lead" }];
	return (
		<div>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[100px]">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Project Name
							</th>
							<th scope="col" className="px-6 py-3">
								Key
							</th>
							<th scope="col" className="px-6 py-3">
								Type
							</th>
							<th scope="col" className="px-6 py-3">
								Lead
							</th>
							<th scope="col" className="px-6 py-3">
								<span className="sr-only"></span>
							</th>
						</tr>
					</thead>
					{/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						{tableHeader.map((header) => (
							<tr>
								<th scope="col" className="px-6 py-3">
									{header.title}
								</th>
							</tr>
						))}
					</thead> */}
					<tbody>
						{projectList.map((project) => (
							<tr
								key={project.id}
								className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
							>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									{project.title}
								</th>
								<td className="px-6 py-4">{project.key}</td>
								<td className="px-6 py-4">{project.type}</td>
								<td className="px-6 py-4 text-blue-600 cursor-pointer hover:text-blue-800">
									{project.lead}
								</td>
								<td className="px-6 py-4 text-right font-medium text-blue-600 dark:text-blue-500 hover:underline">
									<FiMoreHorizontal />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="mt-10 flex gap-x-2 items-center">
				<span className="cursor-pointer">
					<MdOutlineArrowBackIosNew size={20} />
				</span>
				<p className="flex items-center justify-center rounded-md w-[30px] h-[30px] text-white bg-gray-800">
					1
				</p>
				<span className="cursor-pointer">
					<MdOutlineArrowForwardIos size={20} />
				</span>
			</div>
		</div>
	);
};

export default ProjectListTable;
