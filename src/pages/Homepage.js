import { Box, Typography } from "@mui/material";
import React from "react";
import Users from "../component/Users";
import UserInfo from "../component/UserInfo";
import { UseChange } from "../context/StateProvider";

const Homepage = () => {
    const {selectedUser}=UseChange();
  return (
    <Box display={"flex"} width={"100%"} height={"100vh"}>
      <Box width={"40%"} height={"100%"} display={{base:selectedUser?"none":"initial"}}>
        <Users />
      </Box>
      <Box width={"60%"} height={"100%"} display={{base:selectedUser?"initial":"none"}}>
        <UserInfo />
      </Box>
    </Box>
  );
};

export default Homepage;
