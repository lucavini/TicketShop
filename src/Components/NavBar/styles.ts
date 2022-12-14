import { alpha, AppBar, Button, InputBase, styled } from '@mui/material';

export const TopBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.secondary.light};
  width: 100%;
  height: 60px;
  padding: 0px 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 60px;

  .logo {
    width: 150px;
    height: 60px;
    fill: ${({ theme }) => theme.palette.primary.main};
  }

  .close {
    margin: 0px 25px;
    fill: ${({ theme }) => theme.palette.primary.main};
  }

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;

    .option {
      @media (max-width: 1220px) {
        display: none;
      }
    }

    .searchButton {
      display: none;
      
      @media (max-width: 950px) {
        display: contents;
        .icon {
          margin: 0px 25px;
          fill: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }
  }

  .defaultInput {
    display: flex;
    @media (max-width: 950px) {
      display: none;
    }
  }

  .mobileInput {
    display: flex;
  }

  @media(max-width: 760px ) {
    padding: 0px 30px;
  }
`;

export const Item = styled('li')`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  cursor: pointer;

  & + & {
    margin-right: 40px;
  }

  & a,
  button {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.palette.secondary.main};
    &:hover {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  &::after {
    content: '';
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.palette.primary.main};
  }

  &:hover {
    &::after {
      transition: 0.2s;
      width: 100%;
    }
  }
`;

export const SearchContainer = styled('div')(({ theme }) => ({
  borderRadius: 5,
  backgroundColor: alpha(theme.palette.secondary.main, 0.3),
  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.main, 0.2),
  },

  '& + &': {
    marginLeft: '5px',
  },

  display: 'flex',
  width: '220px',
  height: '48px',
  alignItems: 'center',
  justifyContent: 'center',

  '@media(max-width: 760px)': {
    '&': {
      width: '250px',
    },
  },

  '@media(max-width: 650px)': {
    '&': {
      width: '200px',
    },
  },

  '@media(max-width: 570px)': {
    '&': {
      width: '180px',
    },
  },

  '@media(max-width: 520px)': {
    '&': {
      width: '110px',
    },
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.secondary.dark,

  '@media(max-width: 520px)': {
    padding: theme.spacing(0, 1),
    '.icon': {
      display: 'none',
    },
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.secondary.dark,
  width: '100%',
  height: '100%',
  paddingTop: '3px',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 400,
  fontSize: '12px',
}));

export const SearchButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  backgroundColor: alpha(theme.palette.secondary.main, 0.3),
  height: '48px',
  marginLeft: '5px',

  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.main, 0.2),
  },
}));
