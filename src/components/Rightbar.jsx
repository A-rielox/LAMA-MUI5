import {
   Avatar,
   AvatarGroup,
   Box,
   ImageList,
   ImageListItem,
   Typography,
} from '@mui/material';
import React from 'react';

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

            <Typography variant="h6" fontWeight={100} my={2}>
               Latest Conversations
            </Typography>
         </Box>
      </Box>
   );
};

export default Rightbar;
