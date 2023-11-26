import { FormControl, Heading, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const EmailPage = () => {
  const [msg, setMsg] = useState<string>("");

  const handleInput = (e: any) => {
    setMsg(e.target.value);
  };

  const sendMessage = () => {};

  return (
    <div className="bg-slate-100 bg-opacity-50 w-full min-h-[30rem] rounded-b-lg p-[10%]">
      <div className="m-auto flex justify-center items-center flex-col">
        <Heading size="lg" sx={{color: '#9D0001'}}>Send us a message</Heading>
        <FormControl onKeyDown={sendMessage} padding={"1.2rem"}>
          <Textarea
            variant="filled"
            bg="#E0E0E0"
            placeholder="Enter a message.."
            onChange={handleInput}
            value={msg}
            size='sm'
            sx={{ borderRadius: '0.8rem'}}
          ></Textarea>
        </FormControl>
        <div className="flex justify-center content-center w-full my-5">
          <button
            className="bg-[#9D0001] p-4 rounded-md text-white font-bold"
          >
            Send
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailPage;
