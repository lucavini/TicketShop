import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from './styles';

// Pages
import Home from '../Pages/Home';
import Auth from '../Pages/Auth';

function Router() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login/*' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default Router;
