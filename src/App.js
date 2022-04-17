import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import { Box, Stack } from '@mui/material';
import Navbar from './components/Navbar';
import Add from './components/Add';
/* 

56.00

*/
function App() {
   return (
      <Box>
         <Navbar />

         <Stack
            direction="row"
            spacing={{ xs: 0, sm: 2 }}
            justifyContent="space-between"
         >
            <Sidebar />
            <Feed />
            <Rightbar />
         </Stack>

         <Add />
      </Box>
   );
}

export default App;

// sx={{ display: { xs: 'none', sm: 'block' } }}
// sx={{ display: { xs: 0, sm: 2 } }}
