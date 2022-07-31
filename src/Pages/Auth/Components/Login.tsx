import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

// Components
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { PrimaryButton, SecondaryButton } from '../../../Components/Buttons';
import { useAuth } from '../../../Context/AuthContext';
import Title from './Title';

// Styles
import { ActionContainer, FormGroup } from '../styles';

// Assets
import { ReactComponent as FacebookIcon } from '../../../Assets/icons/facebook.svg';
import { ReactComponent as GoogleIcon } from '../../../Assets/icons/google.svg';

interface IFormInput {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().required('Informe seu Email').email('Email invalido'),
  password: yup.string().required('Informe sua senha'),
}).required();

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleLogin } = useAuth();

  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async ({ email, password }) => {
    const state = location.state as {path: string};
    setIsLoading(true);
    setError(false);
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await handleLogin({ email, password });
      navigate(state?.path || '/', { replace: true });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ActionContainer>
      <Title
        title='Login'
        subtitle='Realize seu login e tenha acesso a plataforma de compra e vendas.'
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
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

        <Controller
          control={control}
          defaultValue=''
          name='email'
          render={({ field: { value, onChange } }) => (
            <TextField
              className='input fullColumn'
              fullWidth
              label='e-mail'
              color='primary'
              value={value}
              onChange={onChange}
              helperText={errors.email?.message}
              error={errors.email?.message !== undefined}
            />

          )}
        />

        <FormControl fullWidth variant='outlined' className='input fullColumn'>
          <InputLabel>
            Senha
          </InputLabel>
          <Controller
            control={control}
            defaultValue=''
            name='password'
            render={({ field: { value, onChange } }) => (
              <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                error={errors.password?.message !== undefined}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label='Senha'
              />
            )}
          />
          {errors.password?.message !== undefined
          && <FormHelperText error>{errors.password?.message}</FormHelperText>}
        </FormControl>

        <p className='fullColumn'>
          Esqueceu sua senha? <span>Recupere aqui</span>
        </p>

        {error && (
          <Alert className="fullColumn" variant="outlined" severity="error">
            Usuário ou senha incorretos
          </Alert>
        )}

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
