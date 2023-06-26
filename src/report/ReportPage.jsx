import React, { useState } from 'react';
import './report.css';
import Header from "./Header";

const ReportPage = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'graphic design', description: 'defining requirements, visualizing and creating graphics', budget: 1000, status: 'Pending...' },
    { id: 2, title: 'ui design', description: 'create the user interface for an app, website, or other interactive media', budget: 2000, status: 'Completed' },
    { id: 3, title: 'backend developer', description: 'maintaining, testing, and debugging the entire back end of an application or system', budget: 3000, status: 'In Progress' },
  ]);

  const [projects, setProjects] = useState([
    { id: 1, name: 'Project 1', description: 'Description 1', budget: 1000, status: 'Pending...' },
    { id: 2, name: 'Project 2', description: 'Description 2', budget: 2000, status: 'Completed' },
    { id: 3, name: 'Project 3', description: 'Description 3', budget: 3000, status: 'In Progress' },
  ]);

  const [hiredFreelancers, setHiredFreelancers] = useState([
    { id: 1, name: 'Mekdes Tibebu', description: 'Description 1', budget: 5000, status: 'Pending...' },
    { id: 2, name: 'Kalkidan Getahun', description: 'Description 2', budget: 2000, status: 'Completed' },
    { id: 3, name: 'Dagim getahun', description: 'Description 3', budget: 3000, status: 'In Progress' },
    { id: 3, name: 'dave getahun', description: 'Description 3', budget: 3000, status: 'In Progress' },
    { id: 3, name: 'Dani getahun', description: 'Description 3', budget: 3000, status: 'In Progress' },
    { id: 3, name: 'Dagi getahun', description: 'Description 3', budget: 3000, status: 'In Progress' },

  ]);

  const totalSpent = jobs.reduce((acc, job) => acc + job.budget, 0) + projects.reduce((acc, project) => acc + project.budget, 0) + hiredFreelancers.reduce((acc, freelancer) => acc + freelancer.budget, 0);
  const totalProjects = projects.length;
  const totalHired = hiredFreelancers.length;

  return (
    <div>
      <Header />
      <div className=" w-full  flex p-5 border-b rounded-t dark:border-gray-200">
                <div className='w-4/5 ml-8 flex justify-between'>
                    <h3 className=" w-5/6 text-gray-900 text-xl lg:text-2md font-semibold dark:text-gray-500">
                        Report
                    </h3>
                    <button className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-300">Download</button>
                </div>
      </div>
      <div className="flex p-5 border-b rounded-t dark:border-gray-200">
                    <h3 className=" w-5/6 ml-8 text-gray-900 text-md lg:text-2md font-semibold dark:text-gray-500">
                        Jobs posted
                    </h3>
      </div>

          <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="bg-white border-b">
                      <tr>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          #
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          job title
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          budget( ETB )
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          posted time
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-gray-100 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          ui/ux design
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          4000
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/05/2023
                          <br />
                          7:00
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          pending...
                        </td>
                      </tr>
                      <tr class="bg-white border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          graphic design
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          5000
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/05/2023
                          <br />
                          7:00
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Completed
                        </td>
                      </tr>
                      <tr class="bg-gray-100 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          data analysis
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          7000
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/05/2023
                          <br />
                          7:00
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          incomplete
                        </td>
                      </tr>    
                      <tr class="bg-white border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          backend development
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          8000
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/05/2023
                          <br />
                          7:00
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          incomplete
                        </td>
                      </tr>
                      <tr class="bg-gray-100 border-b">
                        {/* <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td> */}
                        {/* <td colspan="2" class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          
            
                        </td> */}
                         <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        total spent = 1,000,000
                        </td>
                        {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @twitter
                        </td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div>
      
    </div>
    <div className="flex p-5 border-b rounded-t dark:border-gray-200">
                    <h3 className=" w-5/6 ml-8 text-gray-900 text-md lg:text-2md font-semibold dark:text-gray-500">
                        projects created
                    </h3>
      </div>

          <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="bg-white border-b">
                      <tr>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          #
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          project title
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          budget( ETB )
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          create time
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-gray-100 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          store management
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          4000
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/05/2023
                          <br />
                          7:00
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          pending...
                        </td>
                      </tr>
                      <tr class="bg-white border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          colabs
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          5000
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/05/2023
                          <br />
                          7:00
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          Completed
                        </td>
                      </tr>
                      <tr class="bg-gray-100 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          colabs
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          7000
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/05/2023
                          <br />
                          7:00
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          incomplete
                        </td>
                      </tr>    
                      <tr class="bg-white border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         colabs
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          8000
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          10/05/2023
                          <br />
                          7:00
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          incomplete
                        </td>
                      </tr>
                      <tr class="bg-gray-100 border-b">
                        {/* <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td> */}
                        {/* <td colspan="2" class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          
            
                        </td> */}
                         <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        total projects = 100,000
                        </td>
                        {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @twitter
                        </td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div>
      
    </div>
    <div className="flex p-5 border-b rounded-t dark:border-gray-200">
                    <h3 className=" w-5/6 ml-8 text-gray-900 text-md lg:text-2md font-semibold dark:text-gray-500">
                        hired Freelancer
                    </h3>
      </div>

          <div class="flex flex-col">
            <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="bg-white border-b">
                      <tr>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          #
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          full name
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          job title
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          budget( ETB )
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-gray-100 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          mekdes tibebu
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          frontend developer
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          8000
                        </td>
                        
                      </tr>
                      <tr class="bg-white border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          kalkidan getahun
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          ui/ux
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          8000
                        </td>
                        
                      </tr>
                      <tr class="bg-gray-100 border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          dagi getahun
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          backend developer
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          8000
                        </td>
                        
                      </tr>    
                      <tr class="bg-white border-b">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">4</td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                         dani getahun
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          backend developer
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          8000
                        </td>
                        
                      </tr>
                      <tr class="bg-gray-100 border-b">
                        {/* <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">5</td> */}
                        {/* <td colspan="2" class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                          
            
                        </td> */}
                         <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        total hired = 100,000
                        </td>
                        {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          @twitter
                        </td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div>
      <p className='ml-9 mr-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, fuga delectus molestiae iure odit ea! Nostrum voluptates,
       animi tenetur odio eius laboriosam corrupti, ex dolor praesentium vel, provident nemo labore!</p>
    </div>
    </div>
    
  )}

  export default ReportPage