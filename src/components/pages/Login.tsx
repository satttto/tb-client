import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'app/hook';
import { login } from 'features/auth/actions';
import { loginStatusSelector } from 'features/auth/selectors';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  CircularProgress
} from '@mui/material';
import { useFetch } from 'hooks/useFetch';
import { unwrapResult } from '@reduxjs/toolkit';

type FormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export const Login = (): JSX.Element => {
  const { handleSubmit, register, formState: { errors } } = useForm({mode: 'onBlur'});
  const emailHelperMap: Map<string, string> = new Map([['required', 'メールアドレスを入力してください'], ['pattern', '不正なメールアドレスです']]);
  const passwordHelperMap: Map<string, string> = new Map([['required', 'パスワードを入力してください']]);
  const [ emailHelper, setEmailHelper ] = useState('');
  const [ passwordHelper, setPasswordHelper ] = useState('');
  const dispatch = useAppDispatch();
  const loginStatus = useAppSelector(loginStatusSelector);
  const navigate = useNavigate();


  // メールアドレスのヘルパーテキストの更新
  useEffect(() => {
    const type = errors.email?.type || '';
    const helperText = emailHelperMap.get(type) || '';
    setEmailHelper(helperText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors.email]);

  // パスワードのヘルパーテキストの更新
  useEffect(() => {
    const type = errors.password?.type || '';
    const helperText = passwordHelperMap.get(type) || '';
    setPasswordHelper(helperText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors.password]); 

  // 既にログインしている場合、ホームにリダイレクトする
  if (loginStatus.isLoggedIn) {
    navigate('/');
  }

  // ログイン処理
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
    dispatch(login(data))
    .then(unwrapResult)
    .catch(error => console.log(error));
  };


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
            disabled={loginStatus.isLoading}
            fullWidth
          >{ loginStatus.isLoading ?  <CircularProgress color="inherit"/> : 'ログインする' }</Button>
        </Box>
        
      </Box>
      <Grid container mt="3vh" width={300}>
        <Grid item xs>
          <Link to="#">パスワードを忘れた</Link>
        </Grid>
        <Grid item> 
          <Link to="/signup">登録する</Link>
        </Grid>
        </Grid>
    </Box>
  );
}
