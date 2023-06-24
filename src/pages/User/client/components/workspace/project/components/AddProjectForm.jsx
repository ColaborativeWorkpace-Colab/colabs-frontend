import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { BaseURL } from "../../../../../../../services/constants/Constants";
import { Prev } from "react-bootstrap/esm/PageItem";

const AddProjectForm = () => {
  const token = localStorage.getItem("token");
  const [workers, setWorkers] = useState([{}]);
  const [selectMemberActive, setSelectMemberActive] = useState(false);
  const [activeMember, setActiveMember] = useState([]);
  //workers.worker.email
  //workers.earning
  const getWorkersFromAllJob = async () => {
    try {
      const resp = await axios.get(BaseURL + "users/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (resp.status === 200) {
        setWorkers(resp.data.hiredWorkers);
        //worker, earning
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWorkersFromAllJob();
  }, [selectMemberActive]);

  const createProjects = async (newProject) => {
    try {
      const resp = await axios.post(
        BaseURL + "projects",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        newProject
      );

      if (resp.status === 201) {
        // setNewProject(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-2/4 mx-auto">
      <div className="mb-4 rounded-md text-2xl w-full bg-gray-200 p-4 text-center">
        Add Your Project Detail Here
      </div>
      <Formik
        className="space-y-4 md:space-y-6"
        initialValues={{
          title: "",
          members: [],
        }}
        onSubmit={(values, actions) => {
          createProjects(values);
        }}
        // validationSchema={jobValidation}
      >
        {({ values, touched, handleChange, handleBlur, setFieldValue }) => (
          <Form>
            <div className="my-2 flex flex-col gap-y-2">
              <label htmlFor="cover-lettter" className="text-md text-slate-800">
                Project Title
              </label>
              <Field
                type="text"
                placeholder="eg. Colaborative Workspace"
                name="title"
                className="px-4 py-2 rounded-md border-2 border-purple-600 focus:border-purple-600"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="my-2 flex flex-col gap-y-2">
              <label htmlFor="cover-lettter" className="text-md text-slate-800">
                Project Member
              </label>
              <textarea
                onClick={() => setSelectMemberActive(true)}
                // as="textarea"
                // type="text"
                // defaultValue={""}
                placeholder="eg. kal@gmail.com, dan@gmail.com"
                name="members"
                // value={values.members}
                className="px-4 py-2 rounded-md border-2 border-purple-600 focus:border-purple-600"
              />
              <ErrorMessage
                name="members"
                component="div"
                className="text-red-500 text-sm"
              />
              <div
                className={`${
                  selectMemberActive ? "my-2 flex flex-col gap-y-2" : "hidden"
                } `}
              >
                <label
                  htmlFor="cover-lettter"
                  className="text-md text-slate-800"
                >
                  Select Project Member
                </label>
                {workers ? (
                  <div className={``}>
                    <Field
                      as="select"
                      name="color"
                      className="w-full px-4 py-2 rounded-md border-2 border-purple-600 focus:border-purple-600"
                    >
                      {workers.map((data, id) => (
                        <option key={id}>{data?.worker?.email}</option>
                      ))}
                    </Field>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <button
              onClick={() => {
                console.log(activeMember);
              }}
              type="submit"
              className="py-2 px-4 bg-purple-700 hover:bg-purple-600 text-white text-md mt-4 rounded-md"
            >
              Create
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProjectForm;
