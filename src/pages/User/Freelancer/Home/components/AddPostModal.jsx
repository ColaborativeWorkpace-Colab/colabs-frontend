import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Form, Formik, Field, ErrorMessage } from "formik";
// import loginValidation from "./validations";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function AddPostMOdal({ buttonText }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="w-full" onClick={handleClickOpen} disableElevation>
        {buttonText}
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <Formik
            className="space-y-4 md:space-y-6"
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, actions) => {
              handleSubmit(values);
            }}
            // validationSchema={loginValidation}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form>
                <div className="my-3">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Post Title:
                  </label>
                  <Field
                    type="text"
                    placeholder="Post title here"
                    name="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-[400px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="my-3">
                  <label
                    htmlFor="tag"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Post Tag:
                  </label>
                  <Field
                    type="text"
                    placeholder="Post tag here"
                    name="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="tag"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="my-3">
                  <label
                    htmlFor="content"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Post Content:
                  </label>
                  <Field
                    as="textarea"
                    type="text"
                    placeholder="Post content here"
                    name="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="content"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="my-3">
                  <label
                    htmlFor="image"
                    className="cursor-pointer block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <div className="border-dashed border-2 border-purple-500 p-4 w-full text-center">
                      Add Media Here
                    </div>
                  </label>
                  <Field
                    id="image"
                    type="file"
                    placeholder=""
                    name="image"
                    className="hidden bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <button
            className="mx-3 rounded-md py-2 px-4 bg-purple-600 text-white"
            onClick={handleClose}
          >
            Post
          </button>
          <button
            className="mx-3 rounded-md py-2 px-4 bg-red-500 text-white"
            onClick={handleClose}
          >
            Discared
          </button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

// text, image, tags, textContent;
