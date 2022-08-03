import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { Container } from './styles';

// Pages
import Auth from '../Pages/Auth';
import Home from '../Pages/Home';
import MyAccount from '../Pages/MyAccount';
import AboutEvent from '../Pages/AboutEvent';

interface ProtectedRouteProps {
  signed: boolean
  children: any
}

// eslint-disable-next-line no-unused-vars
function ProtectedRoute({ signed, children } : ProtectedRouteProps) {
  const location = useLocation();

  // eslint-disable-next-line no-constant-condition
  if (!signed) {
    return <Navigate to='/login' state={{ path: location.pathname }} />;
  }
  return children;
}

function Router() {
  const { signed } = useAuth();

  return (
    <Container>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path='/' element={<Home />} />
          <Route path='/login/*' element={<Auth />} />
          <Route path='/event/' element={<AboutEvent />} />

          {/* Private */}
          <Route
            path='/myaccout/:id'
            element={<ProtectedRoute signed={signed}><MyAccount /></ProtectedRoute>}
          />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default Router;
