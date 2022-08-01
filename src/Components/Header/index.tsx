import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

// Styles
import { Nav } from './styles';

// Asstes
import { ReactComponent as Logo } from '../../Assets/images/Logo.svg';

type Props = {
  children: React.ReactNode;
};

function index({ children }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Nav position='fixed'>
        <Toolbar className='content'>
          <Link to='/'>
            <Logo className='logo' />
          </Link>

          {children}
        </Toolbar>
      </Nav>
    </Box>
  );
}

export default index;
