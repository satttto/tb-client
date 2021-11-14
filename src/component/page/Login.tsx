import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, TextField, Button } from '@mui/material';


type FormValues = {
  email: string;
  password: string;
};

export const Login = (): JSX.Element => {

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data)
  }

  // TODO:
  const canSubmit = () => {
    return true;
  }

  return (
    <Box height="100vh" width="100vw" display="flex" flexDirection={'column'} p={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="email"
          required
          label="メールアドレス"
          {...register("email", { required: true,　pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
          error={Boolean(errors.email)}
        />
        <TextField
          id="password"
          required
          type="password"
          label="パスワード"
          {...register("password", { required: true, minLength: 8 })}
          error={Boolean(errors.passwowrd)}
        />
        <Button
          id="loginButton"
          variant="contained"
          type="submit"
          disabled={!canSubmit()}
        >ログインする</Button>
      </form>
    </Box>
  );
}
