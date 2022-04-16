import React from 'react';

import {
   Avatar,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   CardMedia,
   Checkbox,
   IconButton,
   Typography,
} from '@mui/material';

import { red } from '@mui/material/colors';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';

const Post = () => {
   return (
      <Card sx={{ my: 5 }}>
         <CardHeader
            avatar={
               <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
               </Avatar>
            }
            action={
               <IconButton aria-label="settings">
                  <MoreVert />
               </IconButton>
            }
            title="Quiero vivir en Vietnam"
            subheader="September 14, 2016"
         />

         <CardMedia
            component="img"
            height="20%"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2fotBy3HDhy7bO5RUj3vFuJwBrpqWw8hJQ&usqp=CAU"
            alt="Paella dish"
         />

         <CardContent>
            <Typography variant="body2" color="text.secondary">
               The uniqueness of Vietnam is linked to its relationship with
               water, perfectly represented by the legendary Mekong river and
               more than 2000 miles of coast, as well as an incredible system of
               underground rivers! Are you ready to enjoy the wonders that wait
               for you in this tiny but incredible
            </Typography>
         </CardContent>

         <CardActions disableSpacing>
            <IconButton aria-label="share">
               <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite color="error" />}
               />
            </IconButton>

            <IconButton aria-label="share">
               <Share />
            </IconButton>
         </CardActions>
      </Card>
   );
};

export default Post;
