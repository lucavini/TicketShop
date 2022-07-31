// Components
import { Route, Routes, Link } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Reset from './Components/Reset';

// styles
import { Banner, Container, ContainerOperation } from './styles';

// Assets
import { ReactComponent as Logo } from '../../Assets/images/Logo.svg';

function Auth() {
  return (
    <Container>
      <Banner>
        <Link to='/'>
          <Logo className='logo' />
        </Link>
        <span>Sua Loja online para compra e venda de ingressos!</span>
      </Banner>

      <ContainerOperation>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset' element={<Reset />} />
        </Routes>
      </ContainerOperation>
    </Container>
  );
}

export default Auth;
