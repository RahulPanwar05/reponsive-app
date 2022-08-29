import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import { borderRadius, padding } from "@mui/system";

const useStyles =makeStyles(theme=>({
search:{
position:"absolute",
right:10,
height:30,
borderRadius:10,
padding:5,
fontSize:18,
[theme.breakpoints.down('sm')]:{
  width:200
}
},
title:{
  [theme.breakpoints.down('sm')]:{
    position:"absolute",
    left:0,
    fontSize:22
}


}}))

const Header = () => {
const classes=useStyles()
const [query,setQuery]=useState("")

const changeHandler=(e)=>{
setQuery(e.target.value)
}
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="primary"
              size="large"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              noWrap
              component="div"
              className={classes.title}
            >
              Country App
            </Typography>
          <input type="text" placeholder="serach for country here" className={classes.search} onChange={changeHandler}/>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
