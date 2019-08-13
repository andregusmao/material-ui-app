import React, { useReducer } from "react";
import { Container, Grid, TextField, Button } from "@material-ui/core";
import { Save as SaveIcon, Cancel as CancelIcon } from "@material-ui/icons";

import useStyles from "./styles";

export default function Login() {
  const styles = useStyles();

  const [values, setValues] = useReducer(
    (state, update) => ({ ...state, ...update }),
    {
      firstname: "",
      lastname: ""
    }
  );

  function handleInputs(event) {
    setValues({
      [event.target.name]: event.target.value
    });
  }

  return (
    <Container className={styles.container}>
      <form noValidate autoComplete="off">
        <Grid container direction="row" spacing={2}>
          <Grid item sm={6}>
            <TextField
              className={styles.textField}
              id="firstname"
              label="First Name"
              margin="dense"
              variant="outlined"
              fullWidth
              value={values.firstname}
              onChange={handleInputs}
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              className={styles.textField}
              id="lastname"
              label="Last Name"
              margin="dense"
              variant="outlined"
              fullWidth
              value={values.lastname}
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
          <Grid item sm={12}>
            <Button className={styles.button} variant="contained" color="primary">
              <SaveIcon className={styles.buttonIcon} /> Salvar
            </Button>
            <Button className={styles.button} variant="contained" color="primary">
              <CancelIcon className={styles.buttonIcon} /> Cancelar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
