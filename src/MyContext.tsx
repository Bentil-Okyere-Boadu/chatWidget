import { createContext, useState, ReactNode } from "react";


//Define the type for the context value
interface MyContextProps {
    data: string;
    setData: React.Dispatch<React.SetStateAction<string>>;
    btn: boolean;
    setBtn: React.Dispatch<React.SetStateAction<boolean>>;
    switchWidget: () => void;
  }
  
  // Create a context with the specified type
  const MyContext = createContext<MyContextProps | undefined>(undefined);
  
  // Define the type for the context provider props
  interface MyContextProviderProps {
    children: ReactNode;
  }
  
  // Create a provider component with TypeScript
  const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
    const [myData, setMyData] = useState<string>("Hello from Context!");
    const [btn, setBtn] = useState<boolean>(true);

    const switchWidget = () => {
      setBtn(!btn)
    }
  
    const contextValue: MyContextProps = {
      data: myData,
      setData: setMyData,
      btn: btn,
      setBtn: setBtn,
      switchWidget: switchWidget
    };
  
    return (
      <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
    );
  };

  export { MyContext, MyContextProvider}
  