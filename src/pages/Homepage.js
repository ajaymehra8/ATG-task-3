import { Box } from "@mui/material";
import React from "react";
import Users from "../component/Users";
import UserInfo from "../component/UserInfo";
import { UseChange } from "../context/StateProvider";

const Homepage = () => {
  const { selectedUser } = UseChange();
  return (
    <Box display={"flex"} width={"100%"} height={"100vh"}>
      <Box
        width={{ xs: selectedUser ? "0" : "100%", md: "40%" }}
        height={"100%"}
        display={{ xs: selectedUser ? "none" : "initial", md: "initial" }}
      >
        <Users />
      </Box>
      <Box
        width={{ xs: selectedUser ? "100%" : "0", md: "60%" }}
        height={"100%"}
        display={{ xs: selectedUser ? "initial" : "none", md: "initial" }}
      >
        <UserInfo />
      </Box>
    </Box>
  );
};

export default Homepage;
