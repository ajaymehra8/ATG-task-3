import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Spinner } from "@chakra-ui/react";
import UserProfile from "./User/UserProfile";
import { UseChange } from "../context/StateProvider";

const UserInfo = () => {
  const { selectedUser,setSelectedUser } = UseChange();
  return (
    <Box
      display={"flex"}
      height={"100vh"}
      justifyContent={"center"}
      position={"relative"}
    >
      {selectedUser && (
        <Button
         onClick={()=>{setSelectedUser(null)}}
          style={{
            position: "absolute",
            left: "5px",
            top: "5px",
            fontSize: "30px",
            color:"gray"
          }}
        >
          <i class="bi bi-arrow-left"></i>
        </Button>
      )}
      {!selectedUser ? (
        <Typography
          alignSelf={"center"}
          variant="h3"
          color={"text.secondary"}
          sx={{ letterSpacing: "2px" }}
        >
          No user selected
        </Typography>
      ) : (
        <Box alignSelf={"center"}>
          <UserProfile />
        </Box>
      )}
    </Box>
  );
};

export default UserInfo;
