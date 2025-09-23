import * as React from "react";
import { useState, useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Tabs,
  Tab,
  Badge,
  Menu,
  MenuItem,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ShopContext } from "../Context/ShopContext";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

function NavBar() {
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext)!;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 30,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(25),
        width: 'auto',
    },
    }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
        },
    },
    }));


  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} />}
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup>

      <AppBar position="static">
        <Toolbar>
          {/* Left: menu icon */}
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <IconButton component={Link} to="/" sx={{ p: 0, mr: 2 }}>
            <img src={logo} alt="Logo" style={{ height: 40 }} />
          </IconButton>

          {/* Tabs (nav) */}
          <Tabs
            value={menu}
            onChange={(_, newValue) => setMenu(newValue)}
            textColor="inherit"
            indicatorColor="secondary"
            sx={{
              // ensure Tabs don't grow and push icons off-screen
              "& .MuiTab-root": { color: "white" },
              "& .Mui-selected": { color: "white" },
            }}
          >
            <Tab value="shop" label="Shop" component={Link} to="/" />
            <Tab value="men" label="Men" component={Link} to="/men" />
            <Tab value="women" label="Women" component={Link} to="/women" />
            <Tab value="jewelrey" label="Jewelery" component={Link} to="/jewelrey" />
            <Tab value="electronics" label="Electronics" component={Link} to="/electronics" />
          </Tabs>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          {/* <-- IMPORTANT: spacer goes here and is self-closing --> */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Right-side icons (in their own box, AFTER the spacer) */}
          {auth && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton component={Link} to="/cart" size="large" color="inherit">
                <Badge badgeContent={getTotalCartItems()} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

              <IconButton
                size="large"
                aria-label="account"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
