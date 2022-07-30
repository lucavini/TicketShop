// Components
import {
  AccountCircle,
  KeyboardArrowDownOutlined,
  PlaceOutlined,
  Search,
  SellOutlined,
} from '@mui/icons-material';
import { AppBar, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

// styles
import Logo from '../../Assets/images/Logo.svg';
import {
  Item,
  SearchButton,
  SearchContainer,
  SearchIconWrapper,
  StyledInputBase,
  TopBar,
} from './styles';

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <TopBar>
          <Link to='/'>
            <img src={Logo} alt='logo' />
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
              <Button
                component={Link}
                to='/login'
                variant='text'
                sx={{ textTransform: 'capitalize' }}
              >
                <AccountCircle sx={{ marginRight: '5px' }} /> Entrar
              </Button>
            </Item>
          </ul>
        </TopBar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
