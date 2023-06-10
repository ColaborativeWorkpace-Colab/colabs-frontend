import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormicInput from "./FormicInput";
import FormicError from "./FormicInputError";

const FormikForm = ({
  inputValidator,
  initialValues,
  validationSchema,
  isSubmitting,
}) => {
  return (
    <div className="">
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        validate={inputValidator}
      >
        {() => (
          <Form className="">
            <div className="mb-2">
              <FormicInput
                type="email"
                name="email"
                placeholder="Enter email address"
              />
              <FormicError name="email" />
            </div>
            <div>
              <FormicInput
                type="password"
                name="password"
                placeholder="Enter your Password"
              />
              <FormicError name="password" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
