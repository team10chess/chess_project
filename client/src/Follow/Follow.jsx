import React from "react";
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
import PeopleIcon from "@mui/icons-material/People";
import { useState } from "react";
import EnhancedTable from "./Table/Table.jsx";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [selectedVal, setSelectedVal] = useState(false);
  function handleSelect() {
    setSelectedVal((prevSelectedVal) => !prevSelectedVal);
  }

  let tabContent=<Typography variant="h6" align="center">Enter Tournament ID to Load details</Typography>;
  let followStatus=<>Follow Tournament</>;

  if(selectedVal){
    tabContent = (
        <EnhancedTable />
    )
    followStatus = <>Hide Tournament</>;
  }
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
            <PeopleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Follow Tournament
          </Typography>
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
              id="id"
              label="Tournament ID"
              name="tourid"
              autoComplete="tourid"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSelect}
            >
              {followStatus}
            </Button>
          </Box>
        </Box>
      </Container>
      <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
            {tabContent}
        </Box>
    </ThemeProvider>
  );
}
