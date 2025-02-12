import { Close } from "@mui/icons-material";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFormData } from "../../Store/slices/DataSlice";

const Home = () => {
  const myData = useSelector((state) => state.data)
  const dispatch = useDispatch();

  let totalPrice = 0;

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(myData))
  }, [myData])

  return (
    <Box>
      {myData.map((item) => {
        totalPrice += item.price;
        return (
          <Paper
            key={item.id}
            sx={{
              position: "relative",
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              mt: "22px",
              pt: "27px",
              pb: "7px",
            }}
          >
            <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
              {item.title}
            </Typography>
            <Typography
              sx={{
                mr: "33px",
                fontWeight: "500",
                fontSize: "1.4em",
                opacity: "0.8",
              }}
              variant="h6"
            >
              ${item.price}
            </Typography>
            <IconButton
              onClick={() => {
                dispatch(deleteItemFormData(item))
                localStorage.setItem("data", JSON.stringify(myData))
              }}
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}

      <Typography mt="55px" textAlign={"center"} variant="h6">
        👉 You Spend ${totalPrice}
      </Typography>
    </Box>
  );
};

export default Home;
