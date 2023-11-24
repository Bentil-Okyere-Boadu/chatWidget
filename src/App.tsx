import { ChakraProvider } from '@chakra-ui/react'
import Widget from './components/Widget'
import FloatingButton from './components/FloatingButton'
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

function App() {
  const controls = useAnimation();
  const [btnOn, setBtnOn] = useState<boolean>(true);

  const showWidget = () => {
    controls.start({ opacity: 1}); 
    setBtnOn(!btnOn)
  }

  const closeWidget = () => {
    controls.start({ opacity: 0}); 
    setBtnOn(!btnOn)
  }

  return (
    <ChakraProvider>
      <div className='bg-red-500 w-full h-[100%] p-[30%]'>
          <h2>this is main div</h2>
      </div>
      <div className="z-100">
        <motion.div
          initial={{opacity: 0, height: 0}}
          animate={controls}
          transition={{ type: 'easeIn', duration: 0.5, delayChildren: 2}}
          exit={{ height: 0, opacity: 0 }}
        >
          <Widget/>
        </motion.div>
        <FloatingButton showWidget={showWidget} closeWidget={closeWidget} switchBtn={btnOn}/>
      </div>
    </ChakraProvider>
  );
}

export default App;
