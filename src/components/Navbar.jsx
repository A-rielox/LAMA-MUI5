import React from 'react';

/* 

41.30

*/

import { styled } from '@mui/material/styles';

import {
   Badge,
   AppBar,
   Toolbar,
   Box,
   Typography,
   InputBase,
   Avatar,
   Menu,
   MenuItem,
} from '@mui/material';

import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

// CONPONENTS
const StyledToolbar = styled(Toolbar)({
   display: 'flex',
   justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
   backgroundColor: 'white',
   padding: '0 10px',
   borderRadius: theme.shape.borderRadius,
   width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
   display: 'none',
   gap: '20px',
   alignItems: 'center',
   [theme.breakpoints.up('sm')]: {
      display: 'flex',
   },
}));

const UserBox = styled(Box)(({ theme }) => ({
   display: 'flex',
   gap: '10px',
   alignItems: 'center',
   [theme.breakpoints.up('sm')]: {
      display: 'none',
   },
}));

const Navbar = () => {
   const [open, setOpen] = React.useState(false);

   return (
      <AppBar position="sticky">
         <StyledToolbar>
            <Typography
               variant="h6"
               sx={{ display: { xs: 'none', sm: 'block' } }}
            >
               A-rielox DEV
            </Typography>

            <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />

            <Search>
               <InputBase placeholder="search..." />
            </Search>

            <Icons>
               <Badge badgeContent={4} color="error">
                  <MailIcon />
               </Badge>

               <Badge badgeContent={2} color="error">
                  <NotificationsIcon />
               </Badge>

               <Avatar
                  alt="Cindy Baker"
                  src="https://cerebriti.b-cdn.net/uploads/d66fa535d3dd708458bffe7a135c519b.jpg"
                  sx={{ width: 30, height: 30 }}
                  onClick={e => setOpen(true)}
               />
            </Icons>

            <UserBox onClick={e => setOpen(true)}>
               <Avatar
                  alt="Cindy Baker"
                  src="https://cerebriti.b-cdn.net/uploads/d66fa535d3dd708458bffe7a135c519b.jpg"
                  sx={{ width: 30, height: 30 }}
               />

               <Typography variant="span">Girl</Typography>
            </UserBox>
         </StyledToolbar>

         <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={e => setOpen(false)}
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
            transformOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
         >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
         </Menu>
      </AppBar>
   );
};

export default Navbar;
