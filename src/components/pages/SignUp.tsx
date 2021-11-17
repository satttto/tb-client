import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
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

type FormValues = {
  name: string;
  email: string;
  password: string;
  rememberMe: string;
};

export const SignUp = (): JSX.Element => {
  const { handleSubmit, register, formState: { errors } } = useForm({mode: 'onBlur'});
  const nameHelperMap: Map<string, string> = new Map([['required', '名前は必須です']]);
  const emailHelperMap: Map<string, string> = new Map([['required', 'メールアドレスは必須です'], ['pattern', '不正なメールアドレスです']]);
  const passwordHelperMap: Map<string, string> = new Map([['required', 'パスワードは必須です']]);
  const [ nameHelper, setNameHelper ] = useState('');
  const [ emailHelper, setEmailHelper ] = useState('');
  const [ passwordHelper, setPasswordHelper ] = useState('');
  const { post, loading } = useFetch();

  // 名前のヘルパーテキストの更新
  useEffect(() => {
    const type = errors.name?.type || '';
    const helperText = nameHelperMap.get(type) || '';
    setNameHelper(helperText);
  }, [errors.name]);

  // メールアドレスのヘルパーテキストの更新
  useEffect(() => {
    const type = errors.email?.type || '';
    const helperText = emailHelperMap.get(type) || '';
    setEmailHelper(helperText);
  }, [errors.email]);

  // パスワードのヘルパーテキストの更新
  useEffect(() => {
    const type = errors.password?.type || '';
    const helperText = passwordHelperMap.get(type) || '';
    setPasswordHelper(helperText);
  }, [errors.password]);


  // 新規登録処理
  // TODO: 
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
    post('https://example.com', data)
    .then(data => console.log(data))
    .catch(error => console.log(error));
  }

  return (
    <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h5">新規登録</Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1, width: 300 }}>
        <TextField
          id="name"
          required
          label="名前"
          {...register("name", { required: true })}
          error={Boolean(errors.name)}
          helperText={nameHelper}
          margin="normal"
          fullWidth
        />
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
            disabled={loading}
            fullWidth
          >{ loading ?  <CircularProgress color="inherit"/> : '新規登録する' }</Button>
        </Box>
        
      </Box>
      <Grid container mt="3vh" width={300}>
        <Grid item xs>
          <Link to="#">パスワードを忘れた</Link>
        </Grid>
        <Grid item> 
          <Link to="/login">ログインする</Link>
        </Grid>
        </Grid>
    </Box>
  );
}
