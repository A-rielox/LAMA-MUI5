import React, { useState } from 'react';

import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import Add from './components/Add';

import { Box, Stack, createTheme, ThemeProvider } from '@mui/material';

/* 

1.09.20

*/
function App() {
   const [mode, setMode] = useState('light');

   const darkTheme = createTheme({
      palette: {
         mode: mode,
      },
   });

   return (
      <ThemeProvider theme={darkTheme}>
         <Box bgcolor={'background.default'} color={'text.primary'}>
            <Navbar />

            <Stack
               direction="row"
               spacing={{ xs: 0, sm: 2 }}
               justifyContent="space-between"
            >
               <Sidebar setMode={setMode} mode={mode} />
               <Feed />
               <Rightbar />
            </Stack>

            <Add />
         </Box>
      </ThemeProvider>
   );
}

export default App;
