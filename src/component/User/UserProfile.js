import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { UseChange } from "../../context/StateProvider";

const UserProfile = () => {
  const { selectedUser } = UseChange();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      p={5}
      border={"1px solid white"}
      borderColor={"text.secondary"}
      borderRadius={"10px"}
      backgroundColor={"background.paper"}
      sx={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", 
        position:"relative"
      }}      
    >
      <Typography
        variant="p"
        width={"clamp(300px,20vw,400px)"}
        style={{ position:"absolute",top:"10px",left:"10px",letterSpacing:"1px" }}
      >
{selectedUser?.profile?.username}
      </Typography>
      <Avatar
        alt={selectedUser?.profile?.firstName}
        src={selectedUser?.avatar}
        sx={{ width: 150, height: 150,marginBottom:"8px" }}
      />
      <Typography variant="h5">
        {selectedUser?.profile?.firstName +
          " " +
          selectedUser?.profile?.lastName}
      </Typography>
      <Typography
        variant="p"
        width={"clamp(300px,20vw,400px)"}
        style={{ textAlign: "center" }}
      >
{selectedUser?.jobTitle}
      </Typography>
      <Typography
        variant="p"
        width={"clamp(300px,20vw,400px)"}
        style={{ textAlign: "center", fontSize: "15px", letterSpacing: "1px" }}
        color="text.secondary"
      >
        {selectedUser?.Bio}
      </Typography>
    </Box>
  );
};

export default UserProfile;
