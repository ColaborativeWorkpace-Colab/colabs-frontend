import * as Yup from "yup";

export const postValidation = Yup.object().shape({
  textContent: Yup.string()
    .required("textContent is required")
    .min(10, "textContent must be at least 10 characters"),
});
