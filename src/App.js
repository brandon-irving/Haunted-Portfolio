import React, { useState } from 'react';
import { GlobalContextProvider } from './context/globalContext';
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './common/theme'
import 'bootstrap/dist/css/bootstrap.min.css';
import useMobileDetect from './utils/hooks/useMobileDetect';
import { HauntedTerminal } from './components/HauntedTerminal/HauntedTerminal';

const App = () => {
  document.title = "Brandon's Portfolio"
  const [terminalTheme, setTerminalTheme] = useState(defaultTheme)
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile()
  console.log('%c 👀 Hope you found what you are looking for! If you have any questions, email me! i would love to answer them. birvingfau@gmail.com ', 'background: #222; color: Red; font-size: 12pt');

  return (
    <ThemeProvider theme={{ ...terminalTheme, isMobile }}>
      <GlobalContextProvider>
        <HauntedTerminal setTerminalTheme={setTerminalTheme} />
      </GlobalContextProvider>
    </ThemeProvider>
  )

}


export default App;
