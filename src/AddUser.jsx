import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const AddUser=()=>{
    return(
        <React.Fragment>
            <h1>AddUser</h1>
            <Link to="/userlisting">
                <Button variant="contained">Back</Button>
            </Link>
        </React.Fragment>
    )
}




































{/* <Grid item xs={2.5}>
<TextField fullWidth variant='outlined' onChange={(e)=>setImg(e.target.value)} label="Add Image Path..."/>
</Grid>
<Grid item xs={2.5}>
<TextField fullWidth variant='outlined' onChange={(e)=>setName(e.target.value)} label="Add Name..."/>
</Grid>
<Grid item xs={2.5}>
<TextField fullWidth variant='outlined' onChange={(e)=>setuId(e.target.value)} label="Add User Id..."/>
</Grid>
<Grid item xs={2.5}>
<TextField fullWidth variant='outlined' onChange={(e)=>setRol(e.target.value)} label="Add Role..."/>
</Grid>
<Grid item xs={2}>
<Button fullWidth variant="contained" onClick={handleAdd}>Add+</Button>
</Grid> */}