import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from './styles';

// Pages
import Home from '../Pages/Home';
import Login from '../Pages/Auth/Login';

function Router() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login/' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default Router;
