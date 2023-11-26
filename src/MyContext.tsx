import { createContext, useState, ReactNode } from "react";


//Define the type for the context value
interface MyContextProps {
    btn: boolean;
    ref: React.RefObject<HTMLDivElement> | null;
    setBtn: React.Dispatch<React.SetStateAction<boolean>>;
    setRef: React.Dispatch<React.SetStateAction<React.RefObject<HTMLDivElement> | null>>;
    switchWidget: () => void;
    handleCloseWidget: () => void;
  }
  
  // Create a context with the specified type
  const MyContext = createContext<MyContextProps | undefined>(undefined);
  
  // Define the type for the context provider props
  interface MyContextProviderProps {
    children: ReactNode;
  }
  
  // Create a provider component with TypeScript
  const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
    const [btn, setBtn] = useState<boolean>(true);
    const [ref, setRef] = useState<React.RefObject<HTMLDivElement> | null>(null);

    const switchWidget = () => {
      setBtn((btn) => !btn)
    }

    const handleCloseWidget = () => {
      // Access the current property of the ref to get the div element
      
      if (ref) {
        const myDiv = ref.current;
        // Toggle the CSS class using classList
        myDiv?.classList.toggle('main');
        }

      switchWidget();
    };
  
    const contextValue: MyContextProps = {
      btn: btn,
      setBtn: setBtn,
      switchWidget: switchWidget,
      handleCloseWidget: handleCloseWidget,
      ref: ref,
      setRef: setRef
    };
  
    return (
      <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
    );
  };

  export { MyContext, MyContextProvider}
  