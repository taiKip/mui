import React from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SubjectOutlined, AddCircleOutlined } from "@mui/icons-material";
import { createTheme, ListItemButton, makeStyles } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {format} from 'date-fns'
import Avatar from "@mui/material/Avatar";

const drawerWidth = 240;

const theme = createTheme()
const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const page = {
    background: "#f9f9f9",
    width: "100%",
    padding:theme.spacing(3)
  };
  const active = {
    background: "#f4f4f4",
  };
  const drawer = {
    width: drawerWidth,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      borderWidth:0
    },
  };

  const date ={
    flexGrow:1
  }
  const appBar ={
    width:`calc(100vw - ${drawerWidth}px)`
  }
  const toolbar = theme.mixins.toolbar
const title ={
    padding:theme.spacing(2)
}
const avatar = {
    marginLeft:theme.spacing(2)
}
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <div style={{ display: "flex" }}>
   <AppBar sx={appBar} elevation={0}>
    <Toolbar>
        <Typography sx={date} >
          Today is the {format(new Date(),'do MMMM Y')}
        </Typography>
        <Typography>
            Mario
        </Typography>
        <Avatar src="/mario-av.png" sx={avatar}/>
    </Toolbar>
   </AppBar>
      {/* side drawer */}
      <Drawer sx={drawer} variant="permanent" anchor="left">
        <div>
          <Typography variant="h5" sx={title} >Ninja Notes</Typography>
        </div>
        {/* List /links */}
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              onClick={() => navigate(item.path)}
              key={item.text}
              sx={location.pathname == item.path ? active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <div style={page}>
        <div style={toolbar}></div>
        {children}
        </div>
    </div>
  );
};

export default Layout;
