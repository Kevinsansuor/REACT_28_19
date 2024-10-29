import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// const themeheader = createTheme({
//   palette: {
//     black: {
//       main: '#D64933',
//       light: '#F8F4F9',
//       dark: '#A29415',
//       contrastText: '#000807',
//     },
//   },
// });

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.55),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.85),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  padding: theme.spacing(0, 2),
  height: '100%',
  left: '100%',
  borderRadius: '100px',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1.25),
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '25ch',
    },
  },
}));

export default function PrimarySearchAppBar({ selectedCategory, setSelectedCategory }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  const categories = ["Programación", "Videos musicales", "Cocina"];

  const handleFilterClick = (event) => {
    console.log("Filter button clicked");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log("Menu closed");
    setAnchorEl(null);
  };

  const handleCategorySelect = (category) => {
    console.log(`Category selected: ${category}`);
    setSelectedCategory(category);
    handleClose();
  };

  return (
    // <ThemeProvider theme={themeheader}>
      <Box>
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <Box className="header-items" sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                Yutu App
              </Typography>

              <Search>
                <SearchIconWrapper sx={{ display: { xs: 'none', md: 'flex' } }}>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Busqueda"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>

              <Box sx={{ display: { md: 'flex' } }}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="filter"
                  onClick={handleFilterClick}
                >
                  <FilterListIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {categories.map((category) => (
            <MenuItem key={category} onClick={() => handleCategorySelect(category)}>
              {category}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    // </ThemeProvider>
  );
}

