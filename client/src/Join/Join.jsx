import React, { useState } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
  Container,
  Link,
  Button,
  Avatar,
  TextField,
  Typography,
} from "@mui/material";
import { PersonAddSharp as PersonAddSharpIcon } from "@mui/icons-material";
import Snackbar from "@mui/material/Snackbar";
import { joinUsers } from "../actions/Join";


const defaultTheme = createTheme();

export default function SignIn() {
  const [tournamentId, setTournamentId] = useState("");
  const [playerId, setPlayerId] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setTournamentId(data.get("tourId"));
    setPlayerId(data.get("playerId"));
    alert(tournamentId)
    handleClick(); // Add this line
  };

  const handleButton=(event) => {
    event.preventDefault();

    if (!tournamentId || !playerId ) {
      // setMessage("All fields are required");
      setOpen(true);
      return;
    }
    // const jsonData = JSON.stringify(formData);
    // console.log({firstName:formData.firstName, lastName:formData.lastName, orgId:formData.orgId});
    alert(tournamentId)
    joinUsers({tourId:tournamentId,playerId:playerId});
   

  }

  

  
  console.log(tournamentId);
  console.log(playerId);
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <PersonAddSharpIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Join Tournament
          </Typography>
      <form onSubmit={handleButton}>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="tournamentId"
              label="Tournament ID"
              name="tourId"

              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="playerId"
              label="Player ID"
              type="text"
              id="playerId"

            />
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Join
            </Button> */}
            <Snackbar
              open={open}
              autoHideDuration={5000}
              onClose={handleClose}
              message="Successfully Joined"
            />
          </Box>
        <button onClick={handleButton}>Submit</button>

          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
