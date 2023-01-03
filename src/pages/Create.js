import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormControlLabel, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Create = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const [category, setCategory] = useState("todos");
  const field = {
    marginTop: "20px",
    marginBottom: "20px",
    display: "block",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/"));
    }
  };
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          sx={field}
          label="Note Title"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          sx={field}
          label="Details"
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />
        <FormControl sx={field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="money"
              control={<Radio color="secondary" />}
              label="Money"
            />
            <FormControlLabel
              value="todos"
              control={<Radio color="secondary" />}
              label="Todos"
            />
            <FormControlLabel
              value="reminders"
              control={<Radio color="secondary" />}
              label="Reminders"
            />
            <FormControlLabel
              value="work"
              control={<Radio color="secondary" />}
              label="Work"
            />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>

      {/* icons */}
      <br />
      {/* <AcUnitOutlinedIcon color="secondary" fontSize="large"/> */}
    </Container>
  );
};

export default Create;
