import React from 'react';

// Components
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import { KeyboardArrowDownOutlined } from '@mui/icons-material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import NestedList from './NestedList';

// Styles
import { NavMenu, Item } from './styles';

// Utils
import { useAuth } from '../../Context/AuthContext';

function HeaderChildren() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [anchorElMobile, setAnchorElMobile] = React.useState<null | HTMLElement>(null);
  const openMobile = Boolean(anchorElMobile);
  const { user, handleLogout } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMobileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMobile(event.currentTarget);
  };
  const handleMobileClose = () => {
    setAnchorElMobile(null);
  };

  return (
    <>
      <NavMenu>
        <Item>
          <Button variant='text' sx={{ color: '#202020' }}>
            <NotificationsNoneOutlinedIcon className='icon' /> Notificação
          </Button>
        </Item>

        <Item>
          <Button
            variant='text'
            endIcon={<KeyboardArrowDownOutlined />}
            sx={{ color: '#202020' }}
            onClick={handleClick}
          >
            <Avatar
              src='/broken-image.jpg'
              sx={{ width: '24px', height: '24px', marginRight: '10px' }}
            />{' '}
            {user?.name.toLowerCase()}
          </Button>
        </Item>

        <Menu
          anchorEl={anchorEl}
          id='account-menu'
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <ListItemIcon>
              <Avatar src='/broken-image.jpg' />{' '}
            </ListItemIcon>
            Minha conta
          </MenuItem>

          <Divider />

          <MenuItem>
            <ListItemIcon>
              <StorefrontIcon fontSize='small' />
            </ListItemIcon>
            Vender
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <LocalGroceryStoreOutlinedIcon fontSize='small' />
            </ListItemIcon>
            Minhas Compras
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
              <FavoriteBorderIcon fontSize='small' />
            </ListItemIcon>
            Favoritos
          </MenuItem>

          <Divider />

          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize='small' />
            </ListItemIcon>
            Sair
          </MenuItem>
        </Menu>
      </NavMenu>

      {/* Menu Mobile */}
      <NavMenu className='MobileMenu'>
        <Item>
          <Button onClick={handleMobileClick} variant='text' sx={{ color: '#202020' }}>
            <MenuIcon className='icon' /> Menu
          </Button>
        </Item>

        <Menu
          anchorEl={anchorElMobile}
          id='account-menu'
          open={openMobile}
          onClose={handleMobileClose}
          onClick={handleMobileClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <NestedList />
        </Menu>

      </NavMenu>
    </>
  );
}

export default HeaderChildren;
