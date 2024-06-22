import { Avatar, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { getAllUser } from "../../Api/Users";
const SingleUser = ({ user,handleFunction }) => {
 
  return (
    <Box
      display={"flex"}
      gap={2}
      alignItems={"center"}
      justifyContent={"flex-start"}
      m={1}
      sx={{ cursor: "pointer" }}
      width={"100%"}
      onClick={handleFunction}
    >
      <Box p={1} pr={0}>
        <Avatar
          alt={user?.profile?.firstName}
          src={user?.avatar}
          sx={{ width: 50, height: 50 }}
        />
      </Box>

      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        p={2}
        pl={0}
      >
        <Typography variant="h6" color={"text.primary"}>
        {user?.profile?.firstName + " " + user?.profile?.lastName}
        </Typography>
        <Typography variant="p" color={"text.secondary"}>
          {user && user.jobTitle}
        </Typography>

        <Typography
          variant="p"
          color={"text.secondary"}
          sx={{ fontSize: "14px" }}
        >
          {user && user.Bio}
        </Typography>
      </Box>
    </Box>
  );
};

export default SingleUser;
