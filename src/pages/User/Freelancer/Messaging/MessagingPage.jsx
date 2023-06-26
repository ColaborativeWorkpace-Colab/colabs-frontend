import React, { useContext, useEffect, useState } from "react";
import FreelancerHeader from "../Header/Header";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import ChatList from "./components/chatlist/ChatList";
import ChatBody from "./components/chatbody/ChatBody";
import Grid from "@mui/material/Grid";
import "./messagingpage.css";
import profileImg from "../../../../assets/images/profile.jpg";
import Divider from "@mui/material/Divider";
import axios from "axios";
// import chat from "../../../../assets/images/chat.jpg"
import SocketContext from "../../../../context/messaging/SocketContext";
import { BaseURL } from "../../../../services/constants/Constants";


export const getMessages = async () => {
  const response = await axios.get(
    `${BaseURL}messaging/${JSON.parse(localStorage.getItem("user"))["_id"]}`
  );
  return response["data"]["messages"];
};

const MessagingPage = () => {
  const theme = useTheme();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatIndex, setChatIndex] = useState(0);
  //TODO: Integrate chatting services
  useEffect(() => {
    const fetchLastSeen = async () =>
      await axios.post(`${BaseURL}messaging/lastSeen`, {
        userIds: JSON.parse(localStorage.getItem("user"))["connections"].join(
          ","
        ),
      });

    fetchLastSeen().then((value) => {
      if (value["data"] !== onlineUsers) setOnlineUsers(value["data"]);
    });

    getMessages().then((value) => {
      setMessages(value);
    });
    
  }, []);

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
            <div className="main__chatbody h-[100%]">
              <SocketContext.Provider value={{messages, onlineUsers, setMessages, chatIndex, setChatIndex }}>
              <Grid container spacing={0}>
                <Grid item xs={6} md={4}> 
                  <ChatList />
                </Grid>   
                <Divider orientation="vertical" variant="middle" flexItem />

                <ChatBody />
              </Grid>
              </SocketContext.Provider>

              <div className="h-screen p-4 right flex flex-col w-1/4 relative ">
                {onlineUsers.map((user, index) => {
                  const onlineStatus = user.isOnline ? (
                    <div className="rounded-full w-3 h-3 bg-green-500 mt-2 mx-6 relative left-8 bottom-5"></div>
                  ) : null;
                  const dateTime = new Date(Date.parse(user.lastSeen))
                    .toLocaleString()
                    .split(",");
                  const lastSeen = user.isOnline ? (
                    <p className="text-[8px]">Online</p>
                  ) : (
                    <div>
                      <p className="text-[8px]">{dateTime[0].trim()}</p>

                      <p className="text-[8px]">{dateTime[1].trim()}</p>
                    </div>
                  );
                  return (
                    <button
                      key={index}
                      className="w-full h-16 bg-white rounded-lg my-[1px] flex"
                    >
                      <div>
                        <div className="rounded-full w-12 h-12 bg-black mt-2 mx-6"></div>
                        {onlineStatus}
                      </div>

                      <div className="overflow-hidden grid justify-items-start">
                        <h1 className="text-md mt-2">{user.userName}</h1>
                        {lastSeen}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </Box>
        </div>
      </div>
      ;
    </>
  );
};

export default MessagingPage;
