import React from "react";
import FreelancerHeader from "../Header/Header";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import ChatList from "./components/chatlist/ChatList";
import ChatBody from "./components/chatbody/ChatBody";
import Grid from "@mui/material/Grid";
import "./messagingpage.css";
import Divider from "@mui/material/Divider";
// import chat from "../../../../assets/images/chat.jpg"

const MessagingPage = () => {
  const theme = useTheme();

  console.log(theme);

  console.log(theme);
  const onlineUsers = ['a', 'b', 'c', 'd'];
  return (
    <>
      <FreelancerHeader selectedNav={3} />
      <div className="w-full h-full mt-[50px] px-20 py-8">
        <div
          style={{
            position: "fixed",
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.15)",
              width: 1400,
              height: "82vh",
              borderRadius: "14px",
            }}
          >
            <div className="main__chatbody">
              <Grid container spacing={0}>
                <Grid item xs={6} md={4}>
                  <ChatList />
                </Grid>
                <Divider orientation="vertical" variant="middle" flexItem />

                <ChatBody />
              </Grid>

              <div className="h-screen p-4 right flex flex-col w-1/4 relative ">
                {onlineUsers.map((value, index) => {
                  return (
                    <button
                      key={index}
                      className="w-full h-16 bg-white rounded-lg my-[1px] flex"
                    >
                      <div>
                        <div className="rounded-full w-12 h-12 bg-black mt-2 mx-6"></div>
                        <div className="rounded-full w-3 h-3 bg-green-500 mt-2 mx-6 relative left-8 bottom-5"></div>
                      </div>

                      <div className="overflow-hidden">
                        <h1 className="text-md mt-2">User Name</h1>

                        <p className="text-[10px]">Last Seen Recently</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </Box>
          {/* <div>
					<img src="chat.jpg" alt="chat"/>
				</div> */}
        </div>
      </div>
      ;
    </>
  );
};

export default MessagingPage;
