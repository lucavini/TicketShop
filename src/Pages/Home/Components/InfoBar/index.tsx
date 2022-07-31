import React from 'react';

// Components
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Styles
import { Container, SearchInfo, SearchControlers } from './styles';

// Assets
import { ReactComponent as GridIcon } from '../../../../Assets/icons/GridIcon.svg';
import { ReactComponent as ListIcon } from '../../../../Assets/icons/ListIcon.svg';

function InfoBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [searchTerm, setSearchTerm] = React.useState('Mais recentes');

  const open = Boolean(anchorEl);

  const menuItemOption = [
    'Mais recentes',
    'Menor preço',
    'Maior preço',
  ];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleOrder(orderBy: number) {
    setSearchTerm(menuItemOption[orderBy]);
    handleClose();
  }

  return (
    <Container>
      <SearchInfo>
        <p>Próximos eventos</p>
        <span>147 eventos encontrados</span>
      </SearchInfo>

      <SearchControlers>
        <div>
          <IconButton
            size='medium'
            edge='end'
            aria-haspopup='true'
            color='inherit'
          >
            <GridIcon className='grid' />
          </IconButton>

          <IconButton
            size='medium'
            edge='end'
            aria-haspopup='true'
            color='inherit'
          >
            <ListIcon className='list' />
          </IconButton>
        </div>

        <Button
          id='fade-button'
          className='showBy'
          endIcon={<KeyboardArrowDownOutlined />}
          sx={{
            background: 'transparent',
            color: '#000',
            fontWeight: 400,
            fontSize: '13px',
          }}
          aria-haspopup='true'
          aria-controls={open ? 'fade-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <p style={{ marginTop: '2px' }}>{searchTerm}</p>
        </Button>
        <Menu
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {menuItemOption.map((item, pos) => (
            <MenuItem key={item} onClick={() => handleOrder(pos)}>{item}</MenuItem>
          ))}
        </Menu>
      </SearchControlers>
    </Container>
  );
}

export default InfoBar;
