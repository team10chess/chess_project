import * as React from "react";
import { useState } from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
// import createData from "../backend/addData";
import { createUsers } from "../actions/Create";


export default function AddressForm() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    orgId: "",
  });

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.orgId) {
      setMessage("All fields are required");
      setOpen(true);
      return;
    }
    // const jsonData = JSON.stringify(formData);
    console.log({firstName:formData.firstName, lastName:formData.lastName, orgId:formData.orgId});
    createUsers({firstName:formData.firstName,lastName:formData.lastName,orgId:formData.orgId});

  };
  
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Organizer details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="orgId"
              name="orgId"
              label="Organizer ID"
              fullWidth
              autoComplete="orgId"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={message}
          />
        </Grid>
        {/* <button onClick={handleSubmit}>Submit</button> */}
      </form>
    </React.Fragment>
  );
}
