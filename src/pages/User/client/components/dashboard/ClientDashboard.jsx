import React from "react";
import Header from "./components/Header";
import DraftSection from "./components/DraftSection";
import PostingSection from "./components/PostingSection";
import EmptyJob from "../job/EmptyJob";
import FormikForm from "../../../../../utils/formik/FormikForm";
import { userInputValidator } from "../../../../../utils/constants/validation/inputValidation";
import { signinSchema } from "../../../../../utils/constants/schema/schema";
import JobList from "../job/JobList";

const ClientDashboard = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="mt-3">
        <JobList />
        {/* <EmptyJob /> */}
        {/* <FormikForm
          initialValues={{ email: "", password: "" }}
          // inputValidator={userInputValidator}
          validationSchema={signinSchema}
        /> */}
      </div>
    </div>
  );
};

export default ClientDashboard;
