import { ChakraProvider } from "@chakra-ui/react";
import FloatingButton from "./components/FloatingButton";
import { MyContextProvider } from "./MyContext";
import ShadowWidget from "./components/ShadowWidget";

function App() {

  return (
    <ChakraProvider>
      <MyContextProvider>
        <div className="bg-red-500 w-full h-[100%] p-[30%]">
          <h2>this is main div</h2>
        </div>
        <ShadowWidget/>
        <FloatingButton/>

      </MyContextProvider>
    </ChakraProvider>
  );
}

export default App;
