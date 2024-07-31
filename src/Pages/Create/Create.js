import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight } from "@mui/icons-material";
import { Box, Button, InputAdornment, styled, TextField } from "@mui/material";
import { purple } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createSchema } from "../../Components/CreateSchema";
import { useDispatch, useSelector } from "react-redux";
import { addToData } from "../../Store/slices/DataSlice";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const Create = () => {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);

  const myData = useSelector((state) => state.data)
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(createSchema)
  });

  const onSubmit = ({ price, title }) => {
    price = Number(price);
    dispatch(addToData({
      id: Date.now(),
      title: title,
      price: price,
    }))
    navigate("/")
  };
  
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(myData))
  }, [])
  

  const navigate = useNavigate();
  return (
    <Box autoComplete="off" component={"form"} sx={{ width: "380px" }} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Transaction Title"
        fullWidth
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
        {...register("title")}
        error={Boolean(errors.title)}
        helperText={
          Boolean(errors.title) && errors.title?.message
        }
      />

      <TextField
        type="number"
        label="Price"
        fullWidth
        sx={{ mt: "22px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
        {...register("price")}
        error={Boolean(errors.price)}
        helperText={
          Boolean(errors.price) && errors.price?.message
        }
      />

      <ColorButton
        type="submit"
        variant="contained"
        sx={{ mt: "22px" }}
      >
        Submit <ChevronRight />
      </ColorButton>
    </Box>
  );
};

export default Create;
