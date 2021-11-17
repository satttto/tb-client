import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, TextField, FormControlLabel, Checkbox, Button} from '@mui/material';


// TODO: send request

type FormValues = {
  email: string;
  password: string;
};

export const Login = (): JSX.Element => {
  const { handleSubmit, register, formState: { errors } } = useForm({mode: 'onBlur'});
  const [ emailHelper, setEmailHelper ] = useState('');
  const [ passwordHelper, setPasswordHelper ] = useState('');

  // メールアドレスのヘルパーテキストの更新
  useEffect(() => {
    let helperText = ''
    if (errors.email?.type === 'required') {
      helperText = 'メールアドレスを入力してください';
    } else if (errors.email?.type === 'pattern') {
      helperText = '不正なメールアドレスです';
    } 
    setEmailHelper(helperText);
  }, [errors.email]);

  // パスワードのヘルパーテキストの更新
  useEffect(() => {
    let helperText = ''
    if (errors.password?.type === 'required') {
      helperText = 'パスワードを入力してください';
    } 
    setPasswordHelper(helperText);
  }, [errors.password]);


  // ログイン処理
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data)
  }

  return (
    <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5">ログイン</Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1, width: 300 }}>
        <TextField
          id="email"
          required
          label="メールアドレス"
          {...register("email", { required: true,　pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
          error={Boolean(errors.email)}
          helperText={emailHelper}
          margin="normal"
          fullWidth
        />
        <TextField
          id="password"
          required
          type="password"
          label="パスワード"
          {...register("password", { required: true })}
          error={Boolean(errors.password)}
          helperText={passwordHelper}
          margin="normal"
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox {...register("rememberMe")} color="primary" />}
          label="Remember me"
        />
        <Box mt={3}>
          <Button
            id="loginButton"
            variant="contained"
            type="submit"
            fullWidth
          >ログインする</Button>
        </Box>
        
      </Box>
      <Grid container mt="3vh" width={300}>
        <Grid item xs>
          <Link to="#">パスワードを忘れた</Link>
        </Grid>
        <Grid item> 
          <Link to="#">登録する</Link>
        </Grid>
        </Grid>
    </Box>
  );
}
