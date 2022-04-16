import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Stack } from '@mui/material';
import Navbar from './components/Navbar';
// import Add from './components/Add';
/* 

51.00

*/
function App() {
   return (
      <Box>
         <Navbar />

         <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar />
            <Feed />
            <Rightbar />
         </Stack>
      </Box>
   );
}

export default App;
