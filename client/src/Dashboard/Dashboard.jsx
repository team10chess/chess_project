import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems } from "./listItems";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PeopleIcon from "@mui/icons-material/People";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PersonAddSharpIcon from "@mui/icons-material/PersonAddSharp";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const routes=["/Create", "/Join","/Follow"]

const cards = [
  {
    heading: "Create Tournament",
    description: "Click here to create tournament as an organizer",
    image: "data:image/jpeg;base64,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",
    buttonValue: "Create",
    icon: <AddCircleOutlineIcon />,
  },
  {
    heading: "Join Tournament",
    description: "Click here to join a live tournament",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhEQExAVFhAPEhAVFRUPEhAQEhcWGBYWGBcSGRUYKCggGBolGxUVITIiJSkrLi4uGR8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBBAUCA//EAEcQAAIBAgEGCQoEAggHAAAAAAABAgMRBAUGEiExQQcTIlFUYXGR0RQXMkKBkpOhscEWI1JiJDMVNFNygoOy4SZDY3N0ovD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AvEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhux86eIhJ2jOLa3Rkm/kU/nnnHiMpYryHCuXFKbgowlo8ZJelOT/QtfVquc3KeQsbkSpSxKkmtX5lO+hffSmuZ/MC9wR/M/OmllClpR5NaCXGU98Xzrni+ckAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0st4ricPXq76dKpJdqTt8zdKy4Vs7YqEsBSlecrcdJbIq9+Lvzu2sDmcC+D0sRiK7X8ulGKfM5yu/lEtbKOEhWhKlUgpU6icZRkrppkZ4MMgywmE0qitVxMuMlF7Yq1oxfXbX7SWVGBSecOQ8RkXERxOHk+JcnoT22/6NTnv8+0tDNLOujj6Wmmo1Y2VSnJq6fOueL3M6eMwsK0JUqkVKnNNSjLY0VblPgrrxnKWHr03Tu3FVXOE0v03SaducC3wUfLIeWcFrg6tlvo1XUXc/A2cFwk4/DPQxFNTtuqwdKfetXyAucENyDwjYPE2jNujUeq1a2i31TWrvsTGMk0mndPY1rQGQAAAAAAAAAAAAAAAAAAAAAAAADjZ35Y8iwlav6yWjD+/LVHx9gEO4Rs+nScsHhZfm7KlSOtxf8AZx/dz83afLMDMBpxxeMjy76VOlLXZ7VOp19Xec/gozfWIqzx1ZaSpTahpa1Kq9cpvntfvZbk5AJSPB5nJJNtpJK7bdklztnLwuc2Dq1OKhiqUqjdlFS2vmT2NgdYAAYNLKGSaNdaNSnGS/ckzeAFaZwcGlN6U6EnTfM7yp/PXH6EbwOWso5HnGE7ujuhUblSkv2y9V9ncXccnLGSKdWEouClCXpRauu1czA85q52YfKEfy3o1YpadKdtJda/UutHfKLzhzarZPmsVhpy4uD0rxfLp9v6o/8AzLDzCz1jj48VVtHFQWtLVGol68evnQExAAAAAAAAAAAAAAAAAAAAACqOGjKrc6GEjsinUmlvb5MF/q70WrVqKKcpO0Yptt7ElrbKSyWnlbK/GNflKpxj6qdP0F7bR72Ba2aGSlhMHQo25UYKU2tV5y1yfezps9z2HgCpOFnOOU6vkNOTVOlZ1bNrSm1dQfOkmn2srtc+y29ardd9xdUeDjDVJTq4idSpWrSlObjLi4Jt3tFWvbdrNjAcHWAozVTi5zcXdKtPThfdybK/tA6eZmIq1MFhp1r8ZKmruW1paoyfW1Y7RhK2rcuYyAAAAAAcvKWFWuVuS/SW7X1cxU2d+QJ4KpHF4ZuNPST5Ds6U+r9r/wBi65xTTT2Mj+OwkZKdKcbxknGSexoD7Zk5zRyhQU9SrU7Rqx5n+pftZIih8DXnkXKCet0r2f76Mnt7V9UXrRqqcYzi7xkk01saaumB7AAAAAAAAAAAAAAAAAOPnVl+ngMPKtO2lrVON9c521Ls3vqAifCznMqVJ4KnL82svzLerT5n1y+hu8FmbrwuHdepG1bFWlZ7Y016Eeq97+1ENzEyFPKmLnjcTeVKE9KTasqlTaoL9qsrrsRcsnuAxNmAAAAAAGGwPhja+hHVtepeJ9aUrpPnSOPiq2nK+7Yuw62GXIj2ID6gAAcvKkLST519DqGllRclPmYEC4Qslcdh3VS5eHvJW3x9aP39h0+CLLTrYaWHk7zwrtHn4uWtdzujqzgpJxaummmup7SuMyq7wGVeIb5E5you+9Ss6b79H5gXeAAAAAAAAAAAAAAAD5160acZTlJKEE3JvUkltZSWWMdWy7joUqV1SV1C61Qh61aS534IkPC9nFJOOApt8tRlV0b3ab5NP5XfsJHwe5sLAUNKaXlNezqPU9FbqafMt/WB3sk5Op4SjTw9NWhTjZc7e1yfW3dmyLgADDZrxxsG7X700gNkA8VKiinKTSjFNtydkkt7YHsqrhFz4cpeS4Wdo05LjKsHtlF/y4vmTWt79gz5z9da+EwTejJ6M6sdJSnu0Ke+3Xv3GMFmAqGAxWIxK/PdGUoR/srcrW/1O1uq4EjzZyosZQp1fWfJmlumtvj7SZRVlbmKu4G25eUR9WEoS9rjb7ItIAAABp5T9D/Evubho5UfJS52BzSs+EKlxONo11qc4wnfrpyX+xZhBOFOheGHqc05x70n9gLcwlZVIQmtk4xkvakz6nCzHxDqYDCTe3iop/4eT9jugAAAAAAAAAAAAAFJZas8urjPR8qpbdlrK3sLokytuFrNic2sfSTbhFRqqN9JKOuNRdm/2HvNLhKpTjGli3oVEkuNtenPrlb0X8gLFB8sPiIVIqcJxlF7JQaku9H0A1cpVLRt+p/LeQHLGfGHoSdOKlVnHbxbSgnzaT39h54Tc5tBeTU5fmVFymtsYfZy+h9MwOD+k6UcTi6elKorwpSuoxi9jkt8nzdgHIXCnVgrQw8P8ycpJd1jRqVcq5ako2lxLeyKdLDx6236XzLioZDwsPRw1JdlOJvxikrJWS3LUgIjmdmJRwFqsnxuJt6bXJh/cW7tes5vC3nDGlQ8ji71a+i5W9Wmmnd9rVu86We+e9LARdOFp4qS1RVnGHNKf2W8guZea9XKVZ43FNuhp6Tc73rS5l+xavogJhwV5HeHwfGTVp4qfGWe1QslHvs37SZmEraty5jIAAADl5UneSXMvqdKcrJt7EcOrPSblzsDyRHhNh/CRfNWh84y8CXES4TJfwkVvdan9JgSbgsqaWTqP7ZVV3TZLSH8FEGsnUr751n3zZMAAAAAAAAAAAAAAAyGZxcHGExTlOnejVk7t09cG+uGzusTMAUriMyMqYGTnh5uSW/DTab7ab2/M8PO3LNJaFSNR7vzMNyu9JF2mLAU3mPmlWx2I8rxcZcVGWk+NTjKpLakk/VX+xcqAAFc5+cISo6WGwklKtsnVVpRh1R3Sl9D4cJOfDjpYLCy5b5NWpDW1f8A5cbetr1tdhnMDMNUtDF4qN6rtKnSktUN6lLnlvtuA5uZmYM8RLyvGqWhN6SpzclUqN69KpvS2atrLWp01FKMUlGKSSSsklsSR6AAAAAD4YqvoRvvexAa2UsR6i9vgc8zJ3d3tZgAQThTxFoYenvcpz9iSX1bJ2VjnzU8ox9OhHXo8VT1a9c2m9XtQFsZkYXisDhYPbxUW7fu5X3O4fOhTUIxitkYxS9isfQAAAAAAAAAAAAAAAAAAABD+EfOnyGhxdOX8TXTUP2x31PsuvsJfOSSbbskm2+oo6KllvKmu/E3d/20IPUu13/9mB2+DDNHStj8RG99dCMteu/85/bvLRPFOmopRikoxSSS1JJbEewAAAAADDdtfMcXE1nOV9243cp1bJR/Vt7DmgAABhu2t7EVvmTS8tyvxzV4xnUrO/NGyh89AmGd+M4nCV573HQXbPV4mhwK5PtDEYh7ZSjTj2JXfza7gLOAAAAAAAAAAAAAAAAAAAAqHPzPCti6zwODcuL0tBul6dWV7OKa9RfPsAkufeeeGhh69ClWU8ROLglT5SjfVK8ti1XK0zTzpeTuNcKMJ1KuitKpJrRityS269ZN83eCqmlGeLqOU3rdKk9GC6nPa33E3wGbmDoK1PDUo/4FJ98rsCq3wjZSqv8ALpQ/y6E5vvPP9P5dqejGur/pwyiu9oulJLUrLssjOkgKX/4gnuxOv/tw8DH9H5ffSfi019y6dJDTQFLLJWX+fE/Hh4mHkrL/AD4n40PEurTQ00BSUsl5d3rEvtqU5fc8ujlyHqYj3YSLv00NJAUc8s5Yp+lTrav1YZ270jzHP3GQdp0odkqc6bLz0kealOMtUkmuaST+oFBZyZ2yxtKFJ01DRnpPRk5J2TSWvtZZfBjlPC+SUcNTrR4+KlKcHyZaTbbsntXYdjKOZ+BxF9PCwu1bSpri5d8bFf508Gs8MniMHOc1T5Tpv+bG2u8JL0rc20C3gV9waZ6SxX8JiHevGN4TepzS2p/uXzLBAAAAAAAAAAAAAAAAA4ee2UnhsFiKq9LQcY/3pclP5kE4G8kp8fjJK7i1Spt67PbOX0RIuF2Vsntc9al9WzxwT07ZPi/1Vaz+aX2AmVwAAAAAAAAAAAAAAABcACl89cN/RuU4V6XJjOUK8Utid7VF2N37y66FRTjGa2SSa7GroqnhrpLSwc97jXj7E4NfVli5rVdPB4WT2uhR/wBKA6gAAAAAAAAAAAAAAAIRwv8A9Q/zqX3OfwdZxYShgadOriaUKinVbjOaUrOWp2JbnbkBZQocQ6jgtOMtJRUnq3WZDPNFDpk/hx8QJX+L8n9No++h+L8n9No++iKeaKHTJ/Dj4jzRQ6ZP4cfECV/i/J/TaPvofi/J/TaPvoinmih0yfw4+I80UOmT+HHxAlf4vyf02j76H4vyf02j76Ip5oodMn8OPiPNFDpk/hx8QJX+L8n9No++h+L8n9No++iKeaKHTJ/Dj4jzRQ6ZP4cfECV/i/J/TaPvofi/J/TaPvoinmih0yfw4+I80UOmT+HHxAlf4vyf02j76H4vyf02j76Ip5oodMn8OPiPNFDpk/hx8QJX+L8n9No++h+L8n9No++iKeaKHTJ/Dj4jzRQ6ZP4cfEDk8LOV8PifJOIrwqaHH6XFyUrX0LX7mWXmd/UcH/49L/SiFeaKn0yfw4+JYWSMD5PQpUFLSVGnGF2rX0Va9gNsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=",
    buttonValue: "Join",
    icon: <PersonAddSharpIcon />,
  },
  {
    heading: "Follow Tournament",
    description: "Follow tournament using Tournament ID",
    image: "data:image/jpeg;base64,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",
    buttonValue: "Follow",
    icon: <PeopleIcon />,
  },
];

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Chess Pairing platform
            </Typography>
            {auth && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Avatar
                    alt="User"
                    src="https://media.licdn.com/dms/image/C5603AQFZn5H18K0S4Q/profile-displayphoto-shrink_400_400/0/1609149687834?e=1712188800&v=beta&t=rL-m0NxQPMAeqNlSXyHDR5TDMyIzq0fZ0I8RpS8xEMg"
                  />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">{mainListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="sm">
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
                noWrap
              >
                Chess Pairing
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="text.secondary"
                paragraph
              >
                One-stop platform to manage all types of Chess tournaments and
                work collaboratively between organizers, players, and followers.
              </Typography>
              <Box sx={{ my: 4 }}>
                {" "}
                {/* Added extra space using my prop  */}
              </Box>
            </Box>
          </Container>
          <Container>
            <Grid container spacing={4} justifyContent="center">
              {cards.map((card,i) => (
                <Grid item key={card.heading} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 2, // Add this line to give the card some curves
                    }}
                  >
                    <CardMedia
                      component="div"
                      sx={{ pt: "56.25%" }}
                      image={card.image}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.heading}
                      </Typography>
                      <Typography>{card.description}</Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "center"}}>
                      <Button onClick={()=>navigate(routes[i])} variant="contained" startIcon={card.icon}>
                        {card.buttonValue}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}