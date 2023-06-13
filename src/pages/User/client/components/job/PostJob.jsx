import React from "react";
import Header from "../dashboard/components/Header";
import ClientHeader from "../../header/ClientHeader";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormicInput from "../../../../../utils/formik/FormicInput";
import FormicInputError from "../../../../../utils/formik/FormicInputError";
import FormikTextArea from "../../../../../utils/formik/FormikTextArea";
const PostJob = ({
  inputValidator,
  initialValues,
  validationSchema,
  isSubmitting,
}) => {
  return (
    <div>
      <ClientHeader />
      <div className="w-full mt-[90px] md:px-[80px] px-[10px]">
        <div className="post-header w-full mt-[90px] md:px[80px] py-4 px-[10px] flex flex-col gap-3 shadow-sm border-2 border-gray-50 rounded-md">
          <div className="w-full rounded-md px-5 py-2 bg-gray-200">
            <p className="text-xl text-slate-800 font-medium">
              Add Job Content Here
            </p>
          </div>
          <div className="mt-4">
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              validate={inputValidator}
            >
              {() => (
                <Form className="">
                  <div>
                    <FormicInput
                      type="text"
                      name="title"
                      placeholder="Enter job title here"
                    />
                    <FormicInputError name="title" />
                  </div>
                  <div className="mt-4">
                    <FormicInput
                      as={"textarea"}
                      type="text"
                      name="description"
                      placeholder="Enter job description here"
                    />
                    <FormicInputError name="description" />
                  </div>
                  <div className="mt-4">
                    <Field as="select" name="color">
                      <option value="red">Hourly</option>
                      <option value="green">Fixed</option>
                    </Field>
                    <FormicInputError name="description" />
                  </div>

                  <button
                    className="mt-4 text-white bg-purple-600 hover:bg-purple-700 rounded-md px-4 py-2"
                    type=""
                    disabled={isSubmitting}
                  >
                    Post
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
