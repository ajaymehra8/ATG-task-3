import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { UseChange } from "../../context/StateProvider";
const SingleUser = ({ user, handleFunction }) => {
  const { selectedUser } = UseChange();
  return (
    <Box
      display={"flex"}
      gap={2}
      pl={2}
      alignItems={"center"}
      justifyContent={"flex-start"}
      bgcolor={
        selectedUser?.id === user?.id &&
        selectedUser?.profile?.username === user?.profile?.username
          ? "black"
          : ""
      }
      borderRadius={"100px"}
      m={1}
      sx={{
        cursor: "pointer",
        transition:"all .7s",
        "&:hover": {
          bgcolor: "black",
          boxShadow: 3,
        },
      }}
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
