import React from 'react';
import InfiniteScrollPage from './InfiniteScrollPage';
import { Menu, MenuItem, Button } from '@mui/material';
import './App.css';

const App = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {/* Navigation Bar */}
      <nav>
        {/* Dropdown Button in Black & White */}
        <Button
          aria-controls={open ? 'social-links-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#555',
            },
          }}
        >
          Social Links
        </Button>
      </nav>

      <Menu
        id="social-links-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'social-links-button',
        }}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: '#f5f5f5',
            boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
            borderRadius: '8px',
          },
          '& .MuiMenuItem-root': {
            padding: '10px 20px',
            '& a': {
              textDecoration: 'none',
              color: '#333',
              fontWeight: 500,
            },
            '&:hover a': {
              color: '#1976d2',
            },
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </MenuItem>
      </Menu>

      <div className='full-page-container'>
        <InfiniteScrollPage />
      </div>
    </div>
  );
};

export default App;
