import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    width: 480,
    maxWidth: 360,
    marginTop: 80,
    flexGrow: 1
  },
  buttonBar: {
    marginTop: 20
  },
  button: {
    marginLeft: theme.spacing(1)
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default useStyles;
