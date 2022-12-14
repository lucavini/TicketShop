import React from 'react';

// Components
import {
  AccountCircle,
  Close,
  KeyboardArrowDownOutlined,
  PlaceOutlined,
  Search,
  SellOutlined,
} from '@mui/icons-material';
import { AppBar, Avatar, Box, Button, Drawer } from '@mui/material';
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
  const [showInput, setShowInput] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <TopBar>
          {showInput ? (
            <>

              <div className='mobileInput'>

                <SearchContainer className='fullInput'>
                  <SearchIconWrapper>
                    <SellOutlined className='icon' />
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
                    <PlaceOutlined className='icon' />
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
              </div>

              <Item
                className='searchButton'
                onClick={() => setShowInput(false)}
              >
                <Close className='icon close' />
              </Item>

              <Box sx={{ flexGrow: 1 }} />
            </>
          ) : (
            <>
              <Link to='/'>
                <Logo className='logo' />
              </Link>

              <Box sx={{ flexGrow: 1 }} />

              <div className='defaultInput'>
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
              </div>

              <Box sx={{ flexGrow: 1 }} />

              <ul>
                <Item
                  className='searchButton'
                  onClick={() => setShowInput(true)}
                >
                  <Search className='icon' />
                </Item>

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

                <Item>
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
                        sx={{
                          marginRight: '5px',
                          width: '24px',
                          height: '24px',
                        }}
                      />
                      {user?.name.toLowerCase()}
                    </Button>
                  )}
                </Item>
              </ul>
            </>
          )}
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
