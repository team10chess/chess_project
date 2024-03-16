import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from 'react';
import { createTours } from "../actions/tourCreate";



export default function PaymentForm() {
  const [formData, setFormData] = useState({
    tourId: "",
    format: "Swiss",
    num: "",
  });


  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.tourId || !formData.num) {
      // setMessage("All fields are required");
      // setOpen(true);
      return;
    }
    // const jsonData = JSON.stringify(formData);
    console.log({tourId:formData.tourId, format:"Swiss", num:formData.num});
    createTours({tourId:formData.tourId, format:"Swiss", num:formData.num});

  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Tournament Details
      </Typography>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="tourid"
            name="tourId"
            label="Tournament ID"
            fullWidth
            autoComplete="tournament id"
            variant="standard"
            onChange={handleChange}

          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Format</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="format"
              label="format"
            >
              <MenuItem value={10}>Round Robin</MenuItem>
              <MenuItem value={20} selected>
                Swiss
              </MenuItem>
              <MenuItem value={30}>Single elimination</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
              
          <TextField id="player-num" name ="num" label="Number of players" onChange={handleChange} />
        </Grid>
      </Grid>
      {/* <button onClick={handleSubmit}>Submit</button> */}
      </form>
    </React.Fragment>
  );
}
