import React from "react";
import EditIcon from "@mui/icons-material/Edit";
// import { makeStyles } from "@mui/styles";
// import { IconButton } from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
// const useStyles = makeStyles((theme) => ({
//   editIcon: {
//     position: "absolute",
//     top: 0,
//     right: 0,
//     color: theme.palette.grey[700],
//     "&:hover": {
//       color: theme.palette.grey[900],
//     },
//   },
// }));

const LowerLeft = () => {
  // const classes = useStyles();
  return (
    <div className="lowerpart">
      <h1>Hours per week</h1>
      <div>
        <IconButton
        //  className={classes.editIcon}
        >
          <EditIcon />
        </IconButton>
      </div>
      <p>More than 30 hrs/week</p>
      <div className="text-md text-slate-500">
        <p>Contract-to-hire</p>
      </div>
      <h1>Languages</h1>
      <p>
        English: <span className="text-md text-slate-500">Conversational</span>
      </p>
      <p>
        Amharic: <span className="text-md text-slate-500">Native</span>
      </p>
      <h1>Education</h1>
      <p>Adama Science and Technology University</p>
      <p>Bachlor of Science(BSc), Computer Science and Engineering</p>
      <div className="text-md text-slate-500">
        <p>2018-2023</p>
      </div>
    </div>
  );
};

export default LowerLeft;
