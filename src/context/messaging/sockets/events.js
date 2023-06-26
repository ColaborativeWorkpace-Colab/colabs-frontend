import { socket } from "./index";
import { addClientToQueue } from "./emit";
export const socketEvents = ({ setValue }) => {
    socket.on("connect", ()=>{
        addClientToQueue();
    });
  socket.on("queueLength", ({ queueLength }) => {
    setValue((state) => {
      return { ...state, queueLength };
    });
  });
  socket.on("positionInLine", ({ positionInLine }) => {
    setValue((state) => {
      return { ...state, positionInLine };
    });
  });

  //TODO: add all necessary socket events
};
