import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';

// Assets
import CloseIcon from '@mui/icons-material/Close';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

// styles
import { Container, Head, Menu, MenuContainer, Title, UserContainer } from './styles';
import { useAuth } from '../../Context/AuthContext';

type Props = {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function DrawerContent({ setDrawerOpen }: Props) {
  const { user, handleLogout } = useAuth();

  return (
    <Container>
      <Head>
        <Title>Minha Conta</Title>
        <CloseIcon onClick={() => setDrawerOpen(false)} className='close' />
      </Head>

      <UserContainer>
        <Avatar
          src='/broken-image.jpg'
          sx={{ width: '45px', height: '45px' }}
        />
        <span style={{ textTransform: 'capitalize' }}>
          Bem vindo, {user?.name.toLowerCase()}
        </span>
      </UserContainer>

      <MenuContainer>
        <span>MENU</span>

        <Menu>
          <MenuItem component={Link} to='/myaccout/' className='item'>
            <ListItemIcon>
              <ManageAccountsOutlinedIcon />
            </ListItemIcon>
            Minha Conta
            <KeyboardArrowRightIcon className='arrow' fontSize='small' />
          </MenuItem>

          <MenuItem component={Link} to='/#' className='item'>
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            Vender
            <KeyboardArrowRightIcon className='arrow' fontSize='small' />
          </MenuItem>

          <MenuItem component={Link} to='/#' className='item'>
            <ListItemIcon>
              <LocalGroceryStoreOutlinedIcon />
            </ListItemIcon>
            Minhas compras
            <KeyboardArrowRightIcon className='arrow' fontSize='small' />
          </MenuItem>

          <MenuItem className='item'>
            <ListItemIcon>
              <FavoriteBorderIcon />
            </ListItemIcon>
            Favoritos
            <KeyboardArrowRightIcon className='arrow' fontSize='small' />
          </MenuItem>

          <MenuItem onClick={() => handleLogout()} className='item'>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            Sair
            <KeyboardArrowRightIcon className='arrow' fontSize='small' />
          </MenuItem>
        </Menu>

        <p className='rodape'>
          CNPJ: 99.999.999/0000-99 <br />
          2022 © TicketShop. <br />
          Todos os direitos reservados.
        </p>
      </MenuContainer>
    </Container>
  );
}

export default DrawerContent;
