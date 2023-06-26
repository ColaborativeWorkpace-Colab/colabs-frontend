import io from "socket.io-client";
import { socketEvents } from "./events";
import { BaseURL } from "../../../services/constants/Constants";

export const socket = io(
    BaseURL.replace('/api/v1/', ''),
{
    autoConnect: true
});

export const initSockets = ({ setValue }) => {
    socket.connect();
    
    socketEvents({ setValue });
};
