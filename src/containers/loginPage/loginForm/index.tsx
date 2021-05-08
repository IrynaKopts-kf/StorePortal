import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputsWrapper, InputWrapper } from './styles';
import { Input, ValidationError, ButtonPrimary } from 'shared/styled-components';
import { login } from '../../../middleware';
import { useDispatch } from 'react-redux';

type FormValues = {
  username: string;
  password: string;
 };

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
   } = useForm<FormValues>();

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(login({ username: data.username, password: data.password }));
   };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <InputsWrapper>
        <InputWrapper>
          <Input
            type='text'
            { ...register('username', { required: { message: 'Required', value: true } }) }
            placeholder='Store user ID'
            invalid={ errors.username }
          />
          { errors.username && <ValidationError>{ errors.username.message }</ValidationError> }
        </InputWrapper>
        <InputWrapper>
          <Input
            type='password'
            { ...register('password', { required: { message: 'Required', value: true } }) }
            placeholder='Password'
            invalid={ errors.password }
          />
          { errors.password && <ValidationError>{ errors.password.message }</ValidationError> }
        </InputWrapper>
      </InputsWrapper>
      <ButtonPrimary type='submit'>Log in</ButtonPrimary>
    </form>
  );
 };

export default LoginForm;
