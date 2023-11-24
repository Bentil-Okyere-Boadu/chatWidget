import { FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import ScrollableChat from "./Chat/ScrollableChat";

const ChatPage = () => {
  const [msg, setMsg] = useState<string>("");

  const handleInput = (e: any) => {
    setMsg(e.target.value);
  };

  const sendMessage = () => {};

  return (
    <div className="bg-slate-100">
      <ScrollableChat />
      <FormControl onKeyDown={sendMessage}>
        {/* {isTyping ? <div> typing... </div> : <></>} */}
        <Input
          variant="filled"
          bg="#E0E0E0"
          placeholder="Enter a message.."
          onChange={handleInput}
          value={msg}
        ></Input>
      </FormControl>
    </div>
  );
};

export default ChatPage;
