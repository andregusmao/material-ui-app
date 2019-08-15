import React, { useReducer, useState } from "react";
import { Container, Grid, TextField, Button, Typography, Snackbar, SnackbarContent } from "@material-ui/core";
import { Check as CheckIcon } from "@material-ui/icons";

import useStyles from "./styles";

export default function Login() {
  const styles = useStyles();

  const [values, setValues] = useReducer(
    (state, update) => ({ ...state, ...update }),
    {
      email: '',
      password: ''
    }
  );

  const [error, setError] = useState('');

  function handleInputs(event) {
    setValues({
      [event.target.id]: event.target.value
    });
    setError('');
  }

  function handleLogin(event) {
    event.preventDefault();
    if (values.email === '' || values.password === '') {
      setError('Informe o e-mail e a senha');
    } else {
      setError('');
    }
  }

  return (
    <Container maxWidth="sm" className={styles.container}>
      <form noValidate autoComplete="off" onSubmit={handleLogin}>
        <Grid container direction="row" spacing={2}>
          <Grid item sm={12} md={12} xs={12}>
            <TextField
              className={styles.textField}
              id="email"
              label="E-mail"
              margin="dense"
              variant="outlined"
              type="email"
              placeholder="Digite o seu e-email"
              fullWidth
              value={values.email}
              onChange={handleInputs}
            />
          </Grid>
          <Grid item sm={12} md={12} xs={12}>
            <TextField
              className={styles.textField}
              id="password"
              label="Senha"
              margin="dense"
              variant="outlined"
              type="password"
              placeholder="Digite a sua senha"
              fullWidth
              value={values.password}
              onChange={handleInputs}
            />
          </Grid>
        </Grid>
        <Grid
          className={styles.buttonBar}
          container
          alignItems="flex-end"
          direction="column"
          justify="center"
        >
          <Grid item sm={12} md={12} xs={12}>
            <Button className={styles.button} type="submit" variant="contained" color="primary">
              <CheckIcon className={styles.buttonIcon} /> Entrar
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        open={error !== ''}
        autoHideDuration={6000}
        variant="error"
      >
        <SnackbarContent
          message={
            <span id="client-snackbar">
              {error}
            </span>
          }
        />
      </Snackbar>
    </Container>
  );
}
