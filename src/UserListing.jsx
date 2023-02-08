import React, { useState, useEffect } from 'react';
import { Grid,TextField,Button,Card,CardContent } from '@mui/material';
import axios from 'axios';
import { UserDetail } from './UserDetail';
import { Link } from 'react-router-dom';
import { Task } from './Task';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export const UserListing = () => {
  const [users, setUsers] = useState([]);
  const [usersCopy, setUsersCopy] = useState([]);
  // const [data, setData] = useState([]);
  const[img, setImg]=useState("")
  const[name, setName]=useState("")
  const[uid, setuId]=useState("")
  // const[rol, setRol]=useState("")
  const [isVisible,setIsVisible]=useState(false)
  const [selected,setSelected]=useState([])
  const [search,setSeacrh]=useState("")

  const handleShow=(user)=>{
    setIsVisible(true)
    setSelected(user)

  }

  // const handleAdd=()=>{
  //   setData([...data,{img,name,uid,rol}])
  // }
  const getUsersData=async()=>{
    const result=await axios.get("https://dummyjson.com/users")
    result.data.users.forEach(user => user.lastLogin = new Date()); // Add lastLogin field with current date and time
    setUsers(result.data.users)
    setUsersCopy(result.data.users)
    console.log(result.data.users)
  }
  useEffect(()=>{
    getUsersData()
  },[])

  useEffect(()=>{
      const result= usersCopy.filter((item)=>item.firstName.toUpperCase().includes(search.toUpperCase()) || item.company.title.toUpperCase().includes(search.toUpperCase()) ) 
      setUsers(result)

  },[search])
  return (
    <div className='bgcol'>
       <Card>
          <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={2.5}>
        </Grid>
        <Grid item xs={2.5}>
        </Grid>
        <Grid item xs={2.5}>
        </Grid>
        <Grid item xs={2.5}>
        </Grid>
        <Grid item xs={2}>
          <Link to="/add">

          <Button fullWidth variant="contained" >+Add User</Button>
          </Link>
        </Grid>
      </Grid>
      <h1>Users</h1>
      <h4>Here are all the users for this project.</h4>
      <input type="text" onChange={(e)=>setSeacrh(e.target.value)} placeholder="Search Name" style={{borderRadius:"10px"}}/>
     <FilterAltIcon/> Filter
      <hr />
      
    <table border="2px solid black">
      <tr>
        <th>NAME</th>
        <th>USER ID</th>
        <th>ROLE</th>
        <th>LAST LOGIN</th>
      </tr>
      
       
        
        {users.map((user) => (
          
          <tr onClick={()=>handleShow(user)}>
            <td><img src={user.image} alt="" height={"50px"} width={"50px"} />{user.firstName}</td>
            <td>{user.id}</td>
            <td>{user.company.title}</td>
            <td>{user.birthDate}</td>
          </tr>
         
        ))}
      
    </table>

   {isVisible && <UserDetail setIsVisible={setIsVisible} isVisible={isVisible} selected={selected}/>}
   </CardContent>
        </Card>
    </div>
  );
};

