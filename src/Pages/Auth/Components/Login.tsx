import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import Title from './Title';
import { PrimaryButton, SecondaryButton } from '../../../Components/Buttons';
import { useAuth } from '../../../Context/AuthContext';

// Styles
import { ActionContainer, FormGroup } from '../styles';

// Assets
import { ReactComponent as GoogleIcon } from '../../../Assets/icons/google.svg';
import { ReactComponent as FacebookIcon } from '../../../Assets/icons/facebook.svg';

function Login() {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit() {
    setIsLoading(true);
    const response = await handleLogin();
    console.log(response);
    setIsLoading(false);
  }

  return (
    <ActionContainer>
      <Title
        title='Login'
        subtitle='Realize seu login e tenha acesso a plataforma de compra e vendas.'
      />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <FormGroup className='fullColumn'>
          <Button
            fullWidth
            sx={{ background: '#0f92f3', color: '#fff' }}
            className='social-button'
            startIcon={<FacebookIcon className='svg_icons' />}
            variant='contained'
            type='submit'
          >
            Login com Facebook
          </Button>
        </FormGroup>

        <FormGroup className='fullColumn'>
          <Button
            fullWidth
            sx={{ background: '#fff', color: '#000' }}
            className='social-button'
            startIcon={<GoogleIcon className='svg_icons' />}
            variant='outlined'
            type='submit'
          >
            Login com Google
          </Button>
        </FormGroup>

        <span className='fullColumn'>Ou conecte-se com:</span>

        <TextField
          className='input fullColumn'
          fullWidth
          label='e-mail'
          color='primary'
        />

        <FormControl fullWidth variant='outlined' className='input fullColumn'>
          <InputLabel htmlFor='outlined-adornment-password'>
            Password
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={() => setShowPassword(!showPassword)}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
          />
        </FormControl>

        <p className='fullColumn'>
          Esqueceu sua senha? <span>Recupere aqui</span>
        </p>

        <div className="buttons fullColumn">

          <SecondaryButton
            className="secondary-button"
            variant="contained"
            type="submit"
            onClick={() => navigate('/login/register')}
          >
            Cadastrar
          </SecondaryButton>
          <PrimaryButton
            variant="contained"
            type="submit"
            loadingPosition='center'
            loading={isLoading}
          >
            Login
          </PrimaryButton>
        </div>
      </form>
    </ActionContainer>
  );
}

export default Login;
