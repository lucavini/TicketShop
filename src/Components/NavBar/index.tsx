import React from 'react';

// Components
import {
  AccountCircle,
  KeyboardArrowDownOutlined,
  PlaceOutlined,
  Search,
  SellOutlined,
} from '@mui/icons-material';
import { AppBar, Box, Button, Avatar, Drawer } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/images/Logo.svg';
import { useAuth } from '../../Context/AuthContext';
import DrawerContent from '../DrawerContent';

// styles
import {
  Item,
  SearchButton,
  SearchContainer,
  SearchIconWrapper,
  StyledInputBase,
  TopBar,
} from './styles';

function NavBar() {
  const { signed, user } = useAuth();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <TopBar>
          <Link to='/'>
            <Logo className='logo' />
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          <SearchContainer className='fullInput'>
            <SearchIconWrapper>
              <SellOutlined />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Evento, show, palestra'
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
              <KeyboardArrowDownOutlined />
            </SearchIconWrapper>
          </SearchContainer>

          <SearchContainer className='fullInput'>
            <SearchIconWrapper>
              <PlaceOutlined />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Localização'
              inputProps={{ 'aria-label': 'search' }}
            />
            <SearchIconWrapper>
              <KeyboardArrowDownOutlined />
            </SearchIconWrapper>
          </SearchContainer>

          <SearchButton>
            <Search />
          </SearchButton>

          <Box sx={{ flexGrow: 1 }} />

          <ul>
            <Item className='option'>
              <Button
                component={Link}
                to='/#'
                variant='text'
                sx={{ textTransform: 'capitalize' }}
              >
                Crie seu evento
              </Button>
            </Item>

            <Item className='option'>
              <Button
                component={Link}
                to='/#'
                variant='text'
                sx={{ textTransform: 'capitalize' }}
              >
                Seja Afiliado
              </Button>
            </Item>

            <Item className='option'>
              {!signed ? (
                <Button
                  component={Link}
                  to='/login'
                  variant='text'
                  sx={{ textTransform: 'capitalize' }}
                >
                  <AccountCircle sx={{ marginRight: '5px' }} /> Entrar
                </Button>
              ) : (
                <Button
                  variant='text'
                  sx={{
                    textTransform: 'capitalize',
                    fontSize: '18px',
                    fontWeight: 400,
                  }}
                  onClick={() => setDrawerOpen(true)}
                >
                  <Avatar
                    src='/broken-image.jpg'
                    sx={{ marginRight: '5px', width: '24px', height: '24px' }}
                  />
                  {user?.name.toLowerCase()}
                </Button>
              )}

            </Item>
          </ul>
        </TopBar>
      </AppBar>

      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <DrawerContent setDrawerOpen={setDrawerOpen} />
      </Drawer>
    </Box>
  );
}

export default NavBar;
