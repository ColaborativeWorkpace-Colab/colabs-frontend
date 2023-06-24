import * as Yup from "yup";

export const coverLtterSchema = Yup.object().shape({
  coverLetter: Yup.string()
    .required("Cover letter is required")
    .min(10, "Cover letter must be at least 10 characters"),
});
