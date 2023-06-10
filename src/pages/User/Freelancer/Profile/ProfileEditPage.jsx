import React from "react";
import Box from "@mui/material/Box";
// import { Typography } from "@material-ui/core";
import Chip from "@mui/material/Chip";
import FreelancerHeader from "../Header/Header";
import credlylogo from "../../../../assets/images/credlylogo.svg";
// import { makeStyles } from "@mui/styles";
import profileImg from "../../../../assets/images/profile.jpg";
import BoltIcon from "@mui/icons-material/Bolt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
// import LowerLeft from './LowerLeft'
import LowerLeft from "./LowerLeft";
import LowerRight from "./LowerRight";
import Testimonials from "./Testimonials";
import Certifications from "./Certifications";
import OtherExperiences from "./OtherExperiences";
import EmploymentHistory from "./EmploymentHistory";
import Footer from "../../../../components/Footer/Footer";

// const useStyles = makeStyles((theme) => ({
//   chip: {
//     "&:hover": {
//       cursor: "pointer",
//     },
//   },
//   closeIcon: {
//     position: "absolute",
//     top: 0,
//     right: 0,
//     color: theme.palette.grey[500],
//     "&:hover": {
//       color: theme.palette.grey[700],
//     },
//   },
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

const ProfileEditPage = () => {
  const classes = useStyles();
  const handleClose = () => {
    // Handle closing the component
  };
  return (
    <>
      <FreelancerHeader selectedNav={1} />
      <div className="w-full h-full mt-[110px] px-40">
        <div
          style={{
            position: "fixed",
          }}
        ></div>
        <Box
          sx={{
            // p: 2,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 1000,
            height: 150,
            backgroundColor: "#011332",
            borderRadius: "15px",
          }}
        >
          <div className="items-center px-10">
            <Typography style={{ color: "white", fontSize: 16 }}>
              Head to Credly to import your existing Credly certifications or
              start earning new ones.
            </Typography>
            <div className="py-4">
              <Chip
                label="Sign in to Credly"
                color="secondary"
                sx={{ paddingLeft: 3, paddingRight: 3 }}
                // className={classes.chip}
              />
            </div>
            <IconButton
              onClick={handleClose}
              // className={classes.closeIcon}
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div className="">
            <img
              className="w-[90px] h-[90px] md:h-[100px] sm:w-[100px]"
              src={credlylogo}
              alt="credly"
            />
          </div>
        </Box>

        <div className="py-10">
          {/* <Box
     sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 1000,
      height: "147vh",
      boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
      // borderRadius: '15px',
    }}
  > */}
          <div>
            <Box
              sx={{
                // p: 2,
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bottom: 10,
                width: 1000,
                height: 150,
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="pro-edit">
                <div className="flex justify-center">
                  <div>
                    <img
                      src={profileImg}
                      alt="mekdes"
                      className="w-[90px] rounded-[50px] h-[90px] border-2 border-slate-300 p-0.5"
                    />
                    <IconButton className={classes.editIcon}>
                      <EditIcon />
                    </IconButton>
                  </div>
                  <div>
                    <div className="profile1">Mekdes Tibebu</div>
                    <div className="text-md text-slate-500 px-3">
                      <LocationOnIcon size="small" />
                      <div className="loc">
                        <p>Adama, Ethiopia</p>
                      </div>
                    </div>
                    <div className="py-2 px-5">
                      <Chip
                        icon={<BoltIcon />}
                        label="Available"
                        variant="outlined"
                      />
                      <p>off</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pro-edit1">
                <Stack direction="row" spacing={3}>
                  <Chip
                    label="See Public View"
                    color="success"
                    variant="outlined"
                    // className={classes.chip}
                  />
                  <Chip
                    label="Profile Setting"
                    color="success"
                    // className={classes.chip}
                  />
                </Stack>
              </div>
            </Box>
            <Box
              sx={{
                display: "flex",
                position: "absolute",
                bottom: -598,
                left: 160,
                width: 300,
                height: "127.5vh",
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              <LowerLeft />
            </Box>
            {/* <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -737,
        left: 461,
        width: 699,
        height: "50vh",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
      }}
    > */}
            <LowerRight />
            {/* </Box> */}
          </div>
          {/* </Box> */}

          <div className="py-8">
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 1000,
                height: "70vh",
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Testimonials />
            </Box>
          </div>
          <div className="py-2">
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 1000,
                height: "70vh",
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Certifications />
            </Box>
          </div>
          <div className="py-10">
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 1000,
                height: "70vh",
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              <EmploymentHistory />
            </Box>
          </div>
          <div className="py-2">
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 1000,
                height: "70vh",
                boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              <OtherExperiences />
            </Box>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileEditPage;
