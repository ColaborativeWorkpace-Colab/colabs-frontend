import React, { useState, useRef, useContext, useEffect } from "react";
import "./chatbody.css";
// import Avatar from "../chatlist/Avatar";
import ChatItem from "./ChatItem";
import { sendMessage } from "../../../../../../context/messaging/sockets/emit";
import { v4 as uuidv4 } from "uuid";
import { getMessages } from "../../MessagingPage";
import SocketContext from "../../../../../../context/messaging/SocketContext";

export const getReceiverId = (messages, chatIndex)=>{
  let receiverId = '';
  let members = (messages && messages.length !== 0) ? messages[chatIndex]['members'] : [];
  
  members.forEach((member) => {
        if (JSON.parse(localStorage.getItem("user"))["_id"] !== member) {
          receiverId = member;
        }
      });

  return receiverId;
}

const ChatBody = () => {
  const { messages, setMessages, chatIndex, profileData } = useContext(SocketContext);
  
  let messagesEndRef = useRef(null);
  let [unsentMessage, setUnsentMessage] = useState("");
  let receiverId = getReceiverId(messages, chatIndex);
  let userName = '';
  let chatId = '';

  
  profileData.forEach((value) => {
    if (value._id === receiverId)
      userName = `${value.firstName} ${value.lastName}`;
  });

  if(messages[chatIndex]){
    chatId = messages[chatIndex]._id;
  }
  
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" }); 
  };

  useEffect(() => {
    getMessages().then((value) => {
      setMessages(value);
    });
    scrollToBottom();
  }, []);

      return (
        <div className="main__chatcontent">
          <div className="content__header">
            <div className="blocks">
              <div className="current-chatting-user">
                {/* <Avatar
                  isOnline="active"
                  image="https://www.shutterstock.com/image-photo/smiling-confident-businesswoman-posing-arms-folded-1457005295"
                /> */}
                <p>{userName}</p>
              </div>
            </div>

            <div className="blocks">
              <div className="settings">
                <button className="btn-nobg">
                  <i className="fa fa-phone"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="content__body">
            <div className="chat__items">
              {(messages[chatIndex] ? messages[chatIndex].totalMessages : []).map((item, index) => {
                return (
                  <ChatItem
                    animationDelay={index + 2}
                    key={item.messageId}
                    user={
                      JSON.parse(localStorage.getItem("user"))["_id"] ===
                      item.sender
                        ? "me"
                        : "other"
                    }
                    msg={item.message}
                    timeStamp={new Date(item.timestamp).toLocaleDateString()}
                  />
                );
                
              })}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="content__footer">
            <div className="sendNewMessage">
              <button className="addFiles">
                <i className="fa fa-plus"></i>
              </button>
              <input
                type="text"
                placeholder="Type a message here"
                onChange= {(e)=>setUnsentMessage(e.target.value)}
                value={unsentMessage}
              />
              
              <button
                className="btnSendMsg"
                id="sendMsgBtn"
                onClick={() => {
                  sendMessage({
                    senderId: JSON.parse(localStorage.getItem("user"))["_id"],
                    receiverId: receiverId,
                    message: unsentMessage,
                    messageId: uuidv4(),
                    timeStamp: new Date(Date.now()).toLocaleDateString(),
                    chatId: chatId,
                  });

                  getMessages().then((value) => {
                    setMessages(value);
                  });
                   
                  setUnsentMessage("");
                  scrollToBottom();
                }}
              >
                <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      );
}

export default ChatBody;