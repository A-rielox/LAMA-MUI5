import React from 'react';

import {
   Avatar,
   AvatarGroup,
   Box,
   Divider,
   ImageList,
   ImageListItem,
   List,
   ListItem,
   ListItemAvatar,
   ListItemText,
   Typography,
} from '@mui/material';

const Rightbar = () => {
   return (
      <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
         <Box position="fixed">
            <Typography variant="h6" fontWeight={100}>
               Online Friends
            </Typography>

            <AvatarGroup max={4}>
               <Avatar
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGzkk6gIzd3CpfYU2EJbi_TG_qjPRAXBEhQ&usqp=CAU"
               />
               <Avatar
                  alt="Travis Howard"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUcGM1uCTe_XDfcErTWfjTv2_61DwLZFoFA&usqp=CAU"
               />
               <Avatar
                  alt="Cindy Baker"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1y9LcM2kRVdPWli0FlT_q9GsyaeBWebGMQ&usqp=CAU"
               />
               <Avatar
                  alt="Agnes Walker"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jm2KDUagmE5gj1vSphLksIe61Fs87vZ4GA&usqp=CAU"
               />
               <Avatar
                  alt="Trevor Henderson"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxEKvFdpSXSsmELevQ6JwvD3PiLkusT9fqw&usqp=CAU"
               />
            </AvatarGroup>

            <Typography variant="h6" fontWeight={100} my={2}>
               Latest Photos
            </Typography>

            <ImageList cols={3} rowHeight={100} gap={5}>
               <ImageListItem>
                  <img
                     alt="Remy Sharp"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGzkk6gIzd3CpfYU2EJbi_TG_qjPRAXBEhQ&usqp=CAU"
                  />
               </ImageListItem>

               <ImageListItem>
                  <img
                     alt="Travis Howard"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfUcGM1uCTe_XDfcErTWfjTv2_61DwLZFoFA&usqp=CAU"
                  />
               </ImageListItem>

               <ImageListItem>
                  <img
                     alt="Cindy Baker"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1y9LcM2kRVdPWli0FlT_q9GsyaeBWebGMQ&usqp=CAU"
                  />
               </ImageListItem>

               <ImageListItem>
                  <img
                     alt="Agnes Walker"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jm2KDUagmE5gj1vSphLksIe61Fs87vZ4GA&usqp=CAU"
                  />
               </ImageListItem>

               <ImageListItem>
                  <img
                     alt="Trevor Henderson"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxEKvFdpSXSsmELevQ6JwvD3PiLkusT9fqw&usqp=CAU"
                  />
               </ImageListItem>

               <ImageListItem>
                  <img
                     alt="Trevor Henderson"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCo_E420gSvsFQpQWQfH6rU-t98DiNK9f5hA&usqp=CAU"
                  />
               </ImageListItem>
            </ImageList>

            <Typography variant="h6" fontWeight={100} mt={2}>
               Latest Conversations
            </Typography>

            <List
               sx={{
                  width: '100%',
                  maxWidth: 360,
                  bgcolor: 'background.paper',
               }}
            >
               <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                     <Avatar
                        alt="Remy Sharp"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCo_E420gSvsFQpQWQfH6rU-t98DiNK9f5hA&usqp=CAU"
                     />
                  </ListItemAvatar>
                  <ListItemText
                     primary="Brunch this weekend?"
                     secondary={
                        <React.Fragment>
                           <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                           >
                              Ali Connors
                           </Typography>
                           {
                              " — I'll be in your neighborhood doing errands this…"
                           }
                        </React.Fragment>
                     }
                  />
               </ListItem>

               <Divider variant="inset" component="li" />

               <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                     <Avatar
                        alt="Travis Howard"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxEKvFdpSXSsmELevQ6JwvD3PiLkusT9fqw&usqp=CAU"
                     />
                  </ListItemAvatar>
                  <ListItemText
                     primary="Summer BBQ"
                     secondary={
                        <React.Fragment>
                           <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                           >
                              to Scott, Alex, Jennifer
                           </Typography>
                           {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                     }
                  />
               </ListItem>

               <Divider variant="inset" component="li" />

               <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                     <Avatar
                        alt="Cindy Baker"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jm2KDUagmE5gj1vSphLksIe61Fs87vZ4GA&usqp=CAU"
                     />
                  </ListItemAvatar>
                  <ListItemText
                     primary="Oui Oui"
                     secondary={
                        <React.Fragment>
                           <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                           >
                              Sandra Adams
                           </Typography>
                           {
                              ' — Do you have Paris recommendations? Have you ever…'
                           }
                        </React.Fragment>
                     }
                  />
               </ListItem>
            </List>
         </Box>
      </Box>
   );
};

export default Rightbar;
