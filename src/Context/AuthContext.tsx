import React from 'react';
import { Client } from '../Interfaces';
import { Api } from '../Service/api';

interface AuthContextData {
  // eslint-disable-next-line no-unused-vars
  handleLogin(): Promise<any>;
  handleLogout(): void;
  signed: boolean;
  user: Client | undefined;
}

interface ChildrenProps {
  children: React.ReactNode;
}

const AuthContext = React.createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: ChildrenProps) {
  const [user, setUser] = React.useState<Client>();
  const [signed, setSigned] = React.useState(false);



  async function handleLogin() {
    const response = await Api('auth/login');

    setUser(response.user);
    localStorage.setItem('@user', JSON.stringify(response.user));
    localStorage.setItem('@tokenJWT', JSON.stringify(response.token));
    setSigned(true);
    return response;
  }

  function handleLogout() {
    setSigned(false);
    localStorage.removeItem('@user');
    localStorage.removeItem('@tokenJWT');
    window.location.reload();
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ user, signed, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const { handleLogin, handleLogout, signed, user } = React.useContext(AuthContext);
  return { handleLogin, handleLogout, signed, user };
}