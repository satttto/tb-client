import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Box, Grid, TextField, Button } from '@mui/material';


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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container justifyContent="center" mt="20vh" direction="column"　alignItems="center" spacing={3}>
        <Grid item>
          <TextField
            id="email"
            required
            label="メールアドレス"
            {...register("email", { required: true,　pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
            error={Boolean(errors.email)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            required
            type="password"
            label="パスワード"
            {...register("password", { required: true, minLength: 8 })}
            error={Boolean(errors.passwowrd)
            }
          />
        </Grid>
        <Grid item>
          <Button
            id="loginButton"
            variant="contained"
            type="submit"
            disabled={!canSubmit()}
          >ログインする</Button>
        </Grid>
      </Grid>
    </form>
  );
}
