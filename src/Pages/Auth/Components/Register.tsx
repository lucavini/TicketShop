import React from 'react';

// Components
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { mask } from 'remask';
import { PrimaryButton } from '../../../Components/Buttons';
import Title from './Title';

// Styles
import { ActionContainer, FormGroup, TermsGroup } from '../styles';

// Assets
import { ReactComponent as FacebookIcon } from '../../../Assets/icons/facebook.svg';
import { ReactComponent as GoogleIcon } from '../../../Assets/icons/google.svg';

function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [phone, setPhone] = React.useState<string>();

  function handleSubmit() {}

  return (
    <ActionContainer>
      <Title
        title='Cadastro'
        subtitle='Realize seu Cadastro e para ter acesso a nossa plataforma completa.'
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
            color='primary'
            className='social-button'
            startIcon={<FacebookIcon className='svg_icons' />}
            variant='contained'
            type='submit'
          >
            Cadastrar com Facebook
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
            Cadastrar com Google
          </Button>
        </FormGroup>

        <span className='fullColumn'>
          Ou preencha o formulario de cadastro:
        </span>

        <TextField
          required
          className='input leftColumn'
          fullWidth
          label='Nome'
          color='primary'
        />

        <TextField
          required
          className='input rightColumn'
          fullWidth
          label='Sobrenome'
          color='primary'
        />

        <TextField
          required
          className='input fullColumn'
          fullWidth
          label='E-mail'
          color='primary'
        />

        <TextField
          required
          className='input fullColumn'
          fullWidth
          label='Telefone'
          value={phone}
          onChange={({ target }) => setPhone(mask(target.value, '(99) 9 9999-9999'))}
        />

        <FormControl fullWidth variant='outlined' className='input leftColumn'>
          <InputLabel htmlFor='outlined-adornment-password'>Senha</InputLabel>
          <OutlinedInput
            required
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
            label='Senha'
          />
        </FormControl>

        <FormControl fullWidth variant='outlined' className='input rightColumn'>
          <InputLabel htmlFor='outlined-adornment-password'>
            Confime a Senha
          </InputLabel>
          <OutlinedInput
            required
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
            label='Confime a Senha'
          />
        </FormControl>

        <TermsGroup className='fullColumn'>
          <Checkbox id='input-terms' />
          <label htmlFor='input-terms'>Li e aceito os termos de uso.</label>
        </TermsGroup>

        <TermsGroup className='fullColumn'>
          <Checkbox id='input-privacy-policy' />
          <label htmlFor='input-privacy-policy'>
            Li e aceito a política de privacidade.
          </label>
        </TermsGroup>

        <PrimaryButton
          variant="contained"
          type="submit"
          loadingPosition='center'
        >
          Cadastrar
        </PrimaryButton>
      </form>
    </ActionContainer>
  );
}

export default Register;
