import React, { useState } from 'react'
import { Card,CardContent,Typography,CardHeader ,IconButton, Avatar,Button,Box,Modal} from '@mui/material';

export const Task = () => {
  const [isVisible,setIsVisible]=useState(false)
  const handleClose=()=>{
    setIsVisible(false)
  }
  
  const handleOpen=()=>{
    setIsVisible(true)
  }

  return (
    <div>Task
  <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={isVisible}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{width:"300px",height:"200px"}}>
    <Card>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
    </Card>
  </Box>
</Modal>
</div>
  )
}
