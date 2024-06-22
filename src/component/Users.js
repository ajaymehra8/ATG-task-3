import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import SingleUser from "./User/SingleUser";
import { getAllUser } from "../Api/Users";
import { UseChange } from "../context/StateProvider";
import UserLoading from "./User/UserLoading";


const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const {setSelectedUser}=UseChange();
const selectUser=(u)=>{
setSelectedUser(u);
}
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getAllUser();
      if (data) {
        setUsers(data);
        console.log(typeof data, data);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Box
      backgroundColor={"background.paper"}
      height={"100%"}
      p={2}
      pt={0}
      sx={{
        overflowY: "scroll",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: "10px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f1f1f1",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "gray",
          borderRadius: "5px",
          height: "100px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#555",
        },
      }}
    >
      <Typography
        variant="h3"
        pt={3}
        mb={"20px"}
        sx={{ position: "sticky", top: 0, zIndex: 1, backgroundColor: "background.paper" }}
      >
        Users
      </Typography>
      {loading ? (
        <UserLoading/>
      ) : users.length > 0 ? (
        users.map((u, index) => <SingleUser key={u.id || index} user={u} handleFunction={()=>{selectUser(u)}}/>)
      ) : (
        <Typography>No users found</Typography>
      )}
    </Box>
  );
};

export default Users;
