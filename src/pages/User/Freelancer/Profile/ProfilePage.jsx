// import React, { useState } from "react";
// import FreelancerHeader from "../Header/Header";
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import profileImg from "../../../../assets/images/profile.jpg";
// import { FaCog } from 'react-icons/fa';
// import LogoutIcon from '@mui/icons-material/Logout';
// import Chip from '@mui/material/Chip';
// import { Typography, IconButton } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { Link } from "react-router-dom";
// import "./profilepage.css";

// const useStyles = makeStyles({
// 	typography: {
// 	  cursor: 'pointer',
// 	},
//   });

// const ProfilePage = () => {
// 	const [extended, setExtended] = useState(false);
// 	const handleClick = () => {
//    		setExtended(!extended);
//   	};

// 	const classes = useStyles();
// 	const [isHovered, setIsHovered] = useState(false);

// 	const handleMouseEnter = () => {
// 		setIsHovered(true);
// 	};

// 	const handleMouseLeave = () => {
// 		setIsHovered(false);
// 	};

// 	return (
// 		<>
// 			<FreelancerHeader selectedNav={6} />
// 			<div className="w-full h-full mt-[50px] px-12 py-8">
// 				<div onClick={handleClick}>
// 					{extended ? (

// 					<Box
// 					sx={{
// 					  display: 'flex',
// 					  flexWrap: 'wrap',
// 					  '& > :not(style)': {
// 						m: 2,
// 						width: 300,
// 						height: 325,
// 					  },
// 					}}
// 				  >
// 					<Paper elevation={2} sx={{ paddingTop: 2 }}>
// 						<div className="profile-image mb-3 flex justify-center">
// 							<img
// 								src={profileImg}
// 								alt="mekdes"
// 								className="w-[90px] rounded-[50px] h-[90px] border-2 border-slate-300 p-0.5"

// 							/>
// 						</div>
// 						<div className="headerpara">
// 							<h1>Mekdes Tibebu</h1>
// 							<p>Freelancer</p>
// 						</div>

// 						<div className="chip">

// 							<Chip
// 							label="Invisible"
// 							color="primary"
// 							variant="outlined"
// 							sx={{ paddingLeft: 10 }}
// 							>
// 							<Chip
// 								label="Online"
// 								color="secondary"
// 							/>
// 							</Chip>

// 						</div>

// 						<div className="prosetlog">
// 							<IconButton>
// 								<FaCog />
// 							</IconButton>
// 							<Typography variant="caption"
// 							 style={{ fontSize: '1rem' }}
// 							 className={classes.typography}
// 							 onMouseEnter={handleMouseEnter}
// 							 onMouseLeave={handleMouseLeave}
// 							>
// 								<Link to='/profilesetting'>
// 									Setting
// 								</Link>
// 							</Typography>
// 							<br />
// 							<IconButton>
// 								<LogoutIcon />
// 							</IconButton>
// 							<Typography variant="caption"
// 							 style={{ fontSize: '1rem' }}
// 							 className={classes.typography}
// 							 onMouseEnter={handleMouseEnter}
// 							 onMouseLeave={handleMouseLeave}
// 							>
// 								Logout
// 							</Typography>
// 						</div>

// 					</Paper>
// 				  </Box>

// 					) : (
// 					<p>profile</p>
// 					)}
// 				</div>
// 			</div>

// 		</>
// 	);
// };

// export default ProfilePage;
