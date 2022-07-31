import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

// Components
import {
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { mask } from 'remask';
import { PrimaryButton } from '../../../Components/Buttons';
import Title from './Title';

// Styles
import { ActionContainer, FormGroup, TermsGroup } from '../styles';

// Assets
import { ReactComponent as FacebookIcon } from '../../../Assets/icons/facebook.svg';
import { ReactComponent as GoogleIcon } from '../../../Assets/icons/google.svg';

interface IFormInput {
  name: string;
  surname: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  name: yup.string().required('Informe seu nome'),
  surname: yup.string().required('Informe seu sobrenome'),
  phone: yup.string().required('Informe seu telefone'),
  email: yup.string().required('Informe seu Email').email('Email invalido'),
  password: yup.string().required('Informe sua senha'),
  confirmPassword: yup.string().required('Informe sua senha'),
}).required();

function Register() {
  const [showPassword, setShowPassword] = React.useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <ActionContainer>
      <Title
        title='Cadastro'
        subtitle='Realize seu Cadastro e para ter acesso a nossa plataforma completa.'
      />
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <Controller
          control={control}
          defaultValue=''
          name='name'
          render={({ field: { value, onChange } }) => (
            <TextField
              className='input leftColumn'
              fullWidth
              label='Nome'
              value={value}
              onChange={onChange}
              helperText={errors.name?.message}
              error={errors.name?.message !== undefined}
            />
          )}
        />

        <Controller
          control={control}
          defaultValue=''
          name='surname'
          render={({ field: { value, onChange } }) => (
            <TextField
              className='input rightColumn'
              fullWidth
              label='Sobrenome'
              value={value}
              onChange={onChange}
              helperText={errors.surname?.message}
              error={errors.surname?.message !== undefined}
            />
          )}
        />

        <Controller
          control={control}
          defaultValue=''
          name='email'
          render={({ field: { value, onChange } }) => (
            <TextField
              className='input fullColumn'
              fullWidth
              label='E-mail'
              value={value}
              onChange={onChange}
              helperText={errors.email?.message}
              error={errors.email?.message !== undefined}
            />
          )}
        />

        <Controller
          control={control}
          defaultValue=''
          name='phone'
          render={({ field: { value, onChange } }) => (
            <TextField
              className='input fullColumn'
              fullWidth
              label='Telefone'
              value={value}
              onChange={({ target }) => onChange(mask(target.value, '(99) 9 9999-9999'))}
              helperText={errors.phone?.message}
              error={errors.phone?.message !== undefined}
            />
          )}
        />

        <FormControl fullWidth variant='outlined' className='input leftColumn'>
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

        <FormControl fullWidth variant='outlined' className='input rightColumn'>
          <InputLabel>
            Confime a Senha
          </InputLabel>
          <Controller
            control={control}
            defaultValue=''
            name='confirmPassword'
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
                label='Confime a Senha'
              />
            )}
          />
          {errors.password?.message !== undefined
          && <FormHelperText error>{errors.password?.message}</FormHelperText>}
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
