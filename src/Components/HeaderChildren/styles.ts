import { styled } from '@mui/material/styles';

export const NavMenu = styled('ul')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  li {
    margin-left: 32px;
  }

  a {
    text-decoration: none;
  }

  &.MobileMenu {
    display: none;

    @media (max-width: 841px) {
      display: contents;
    }
  }

  & {
    @media (max-width: 841px) {
      display: none;
    }
  }
`;

export const Item = styled('li')`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  cursor: pointer;
  & + & {
    margin-left: 32px;
  }

  .icon {
    margin-right: 10px;
  }

  &::after {
    content: '';
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.palette.secondary.main};
  }

  &:hover {
    &::after {
      transition: 0.2s;
      width: 100%;
    }
  }
`;
