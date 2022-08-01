import React from 'react';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import Avatar from '@mui/material/Avatar';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Logout from '@mui/icons-material/Logout';

function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: 250, maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          Menu
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Avatar sx={{ width: 9, height: 9 }} src='/broken-image.jpg' />
        </ListItemIcon>
        <ListItemText primary='Minha Conta' />
      </ListItemButton>

      {/* Submenu */}
      <Collapse in={open} timeout='auto' unmountOnExit>

        <List component='div' disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsNoneOutlinedIcon fontSize='medium' />
            </ListItemIcon>
            <ListItemText primary='Notificações' />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <StorefrontIcon fontSize='medium' />
            </ListItemIcon>
            <ListItemText primary='Vender' />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <LocalGroceryStoreOutlinedIcon fontSize='medium' />
            </ListItemIcon>
            <ListItemText primary='Minhas Compras' />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <FavoriteBorderIcon fontSize='medium' />
            </ListItemIcon>
            <ListItemText primary='Favoritos' />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <Logout fontSize='medium' />
            </ListItemIcon>
            <ListItemText primary='Sair' />
          </ListItemButton>
        </List>

      </Collapse>

    </List>
  );
}

export default NestedList;
