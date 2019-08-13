import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./styles";

import Login from "../Login";

export default function Main() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position="absolute" color="primary" className={styles.bar}>
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            AppBar
          </Typography>
        </Toolbar>
      </AppBar>

      <Login />
    </div>
  );
}
