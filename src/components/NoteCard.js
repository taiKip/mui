import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { DeleteOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import {  green,yellow,pink, blue } from "@mui/material/colors";
const backgroundColor=(note)=>{
           if(note.category == 'work') {
            return yellow[700]
           }
           if(note.category == 'money') {
            return green[500]
           }
           if(note.category == 'work') {
            return pink[700]
           }
          return blue[500]
        }
    

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar
            sx={{backgroundColor:backgroundColor(note)}}
            >
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton
              aria-label="delete"
              onClick={() => handleDelete(note.id)}
            >
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
