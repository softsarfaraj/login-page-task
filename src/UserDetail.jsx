import React, { useState, useEffect } from 'react';
import { Card,CardContent,Typography,Box ,Modal, Avatar, Button, Grid} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AddToQueueSharp } from '@mui/icons-material';

export const UserDetail = ({setIsVisible,isVisible, selected}) => {
  // const [user, setUser] = useState({});
  console.log("user>>>>>>>>",selected)
 
const handleShow=()=>{
  setIsVisible(false)
}

const handleClose=()=>{
  setIsVisible(false)
}

const handleOpen=()=>{
  setIsVisible(true)
}
  return (
    <Modal
  open={isVisible}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
<Box sx={{width:"300px"}}>
     <Card sx={{width:"300px",position:'absolute',right:"0px",top:"10px",height:"100%"}}>
  <h5>User details</h5>
     {/* <Card> */}
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={4}>
          <Avatar
  alt="Remy Sharp"
  src={selected.image}
  style={{
    width: "65px",
    height: "65px",
    borderRadius: "50px",
    backgroundColor: "aquamarine"
  }}
/>
      </Grid>
      <Grid item xs={6}>
      <Typography style={{fontWeight:"bold"}}>
        {selected.firstName} {selected.maidenName}
      </Typography>    
      
      <Typography>
       User ID: {selected.id} <br />
      <h5 className='act' type="submit">Active</h5>
       
      </Typography>
      </Grid>
      </Grid>
      </CardContent>
      {/* </Card> */}
      <Card>
      <CardContent
      >

        <Typography style={{fontWeight:"bold"}}> <AccountCircleIcon/>Basic & account details</Typography><br />
        <Typography style={{fontWeight:"bold"}}>{selected.firstName} {selected.maidenName}</Typography> Full name
      
        <Typography style={{fontWeight:"bold"}}>{selected.company.title} </Typography> User roles
      </CardContent>
      </Card>
    
      <CardContent
      >
        <Typography style={{fontWeight:"bold"}}>User data</Typography>
        <Typography>{selected.birthDate}</Typography>
        <Typography>Last Login</Typography>
      </CardContent>
    
    </Card>
    </Box>
</Modal>
  );
};

// export default UserDetail;
